// Import useSelector hook to access Redux store state
import { useSelector } from "react-redux";

// Import reusable ArticleCard component
import ArticleCard from "../components/ArticleCard";

// Import Link for navigation between routes
import { Link } from "react-router-dom";

// This component displays all articles that the user
// has added to their favorites list. It retrieves data
// from the Redux store and renders it accordingly.
function Favorites() {

    // Access favorites list from the Redux store
    const favorites = useSelector((state) => state.favorites.favorites) || [];

    // Displays a message if no favorite articles are added.
    if (favorites.length === 0){
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                    No favorites added yet
                </h2>
                <Link 
                    to="/" 
                    className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full font-medium hover:bg-indigo-100 transition-colors"
                >
                    Go back to articles
                </Link>
            </div>
        );
    }

    // Displays the list of favorite articles using the
    // reusable ArticleCard component.
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        My Favorites
                    </h1>

                    <Link 
                        to="/"
                        className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full font-medium hover:bg-indigo-100 transition-colors"
                    >
                        ← Back to Articles
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {favorites.map((article) => (
                        <div 
                            key={article.key}
                            className="transform hover:-translate-y-1 transition-transform duration-300"
                        >
                            <ArticleCard article={article} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

// Export Favorites component
export default Favorites;