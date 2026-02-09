// Import hooks from react-redux
// useDispatch → used to dispatch actions to the Redux store
// useSelector → used to read data from the Redux store
import { useDispatch, useSelector } from "react-redux";

// Import useEffect hook for handling side effects
import { useEffect } from "react";

// Import async thunk for fetching articles
import { fetchArticles } from "../features/articles/articlesSlice";

// Import reusable UI components
import ArticleCard from "../components/ArticleCard";
import SearchBar from "../components/SearchBar";
import TagFilter from "../components/TagFilter";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

// Import Link for navigation between routes
import { Link } from "react-router-dom";

// Home Component
// This component serves as the main landing page of the
// application. It displays articles, provides search
// and tag-based filtering, and allows navigation to 
// favorite articles.
function Home() {

    // Initialize dispatch function to trigger Redux actions
    const dispatch = useDispatch();

    // Extract required state values from the articles slice
    const {articles, loading, error, searchInput, selectedTag} = useSelector((state) => state.articles);

    // Search Filter Logic
    // Filters articles based on the user's search input
    // by matching the article title.
    const filterArticles = articles.filter((article) => 
            article.title
            .toLowerCase().
            includes(searchInput.toLowerCase())  // Case-insensitive search
    );

    // useEffect Hook 
    // Fetches articles when the component mounts and
    // re-runs when the selected tag changes.
    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch, selectedTag]);

    // Display loading page while fetching data
    if(loading) {
        return (
            <div className="flex justify-center items-center min-h-[50vh]">
                <Loader />
            </div>
        );
    }

    // Display error page if API request fails
    if(error){
        return (
            <div className="flex justify-center items-center min-h-[50vh]">
                <ErrorMessage />
            </div>
        );
    }

    // Displays search bar, tag filter, navigation link,
    // and list of filtered articles.
    return(
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

                {/* Search input component */}
                <div className="mb-6">
                    <SearchBar />
                </div>

                {/* Tag filtering component */}
                <div className="mb-6">
                    <TagFilter />
                </div>

                {/* Link to navigate to favorites page */}
                <div className="mb-8 text-right">
                    <Link 
                        to="/favorites"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-600 rounded-full font-medium hover:bg-rose-100 transition-colors"
                    >
                        ❤️ View Favorites
                    </Link>
                </div>

                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">
                        Articles
                    </h1>

                    {/* Render filtered articles */}
                    {filterArticles.length > 0 ? (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filterArticles.map((article) => (
                                <li 
                                    key={article.id}
                                    className="transform hover:-translate-y-1 transition-transform duration-300"
                                >
                                    <ArticleCard article={article}/>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">
                                No articles found matching "{searchInput}"
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

// Export Home component
export default Home;