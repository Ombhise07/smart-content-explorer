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
            <div>
                <h2>No favorites added yet </h2>
                <Link to="/">Go back to articles</Link>
            </div>
        );
    }

    // Displays the list of favorite articles using the
    // reusable ArticleCard component.
    return (
        <div>
            <h1>My Favorites</h1>

            {favorites.map((article) => (
                <ArticleCard key={article.key} article={article} />
            ))}
        </div>
    );
}

// Export Favorites component
export default Favorites;