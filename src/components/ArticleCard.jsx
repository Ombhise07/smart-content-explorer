// Import Link component for navigation between routes
import {Link} from "react-router-dom";

// Import hooks from react-redux
// useSelector → access Redux state
// useDispatch → dispatch actions to Redux store
import {useSelector, useDispatch} from "react-redux"

// Import actions for managing favorites
import { addToFavorites, removeFavorite } from "../features/favorites/favoritesSlice";

// This component displays individual article details
// and provides functionality to add or remove the
// article from the favorites list.
function ArticleCard({article}) {

    // Initialize dispatch functiongit push

    const dispatch = useDispatch()

    // Access favorites list from Redux store
    const favorites = useSelector((state) => state.favorites.favorites);

    // Determines whether the current article is already
    // present in the favorites list.
    const isFavorites = article ? favorites.some((item) => item.id === article.id) : false;

    // Prevent rendering if article data is not available
    if(!article) return null;

    // Toggles between adding and removing an article
    // from the favorites list.
    const handleFavoriteClick = () => {
        if(isFavorites){
            dispatch(removeFavorite(article.id))    // Remove from favorites
        }
        else{
            dispatch(addToFavorites(article))   // Add to favorites
        }
    };

    // Displays article title, description, author name,
    // and favorite toggle button.
    return (
        <div style={{border:"1px solid #ddd", padding: "16px", marginBottom: "12px"}}>
            <h3>
                <Link to={`/article/${article.id}`}>
                    {article.title}
                </Link>
            </h3>
            <p>{article.description}</p>

            <p>
                <strong>Author:</strong>{article.user.name}
            </p>

            <button onClick={handleFavoriteClick}>
                {isFavorites ? "Remove from Favorties": "Add to Favorites"}
            </button>
        </div>
    );
}

// Export ArticleCard component
export default ArticleCard; 