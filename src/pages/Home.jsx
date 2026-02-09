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
        return <Loader />
    }

    // Display error page if API request fails
    if(error){
        return < ErrorMessage />
    }

    // Displays search bar, tag filter, navigation link,
    // and list of filtered articles.
    return(
        <>
        {/* Search input component */}
        <SearchBar />

        {/* Tag filtering component */}
        <TagFilter />

        {/* Link to navigate to favorites page */}
        <Link to="/favorites">❤️ View Favorites</Link>

        <div>
            <h1>Articles</h1>

            {/* Render filtered articles */}
            <ul>
                 {filterArticles.map((article) => (
                    <ArticleCard key={article.id} article={article}/>
            ))}
            </ul>
        </div>
        </>
    )
}

// Export Home component
export default Home;