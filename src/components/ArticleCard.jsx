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
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
            
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                <Link 
                    to={`/article/${article.id}`}
                    className="hover:text-indigo-600 transition-colors"
                >
                    {article.title}
                </Link>
            </h3>

            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {article.description}
            </p>

            <p className="text-sm text-gray-500 mb-4">
                <strong className="text-gray-700">Author:</strong>{" "}
                {article.user.name}
            </p>

            <button 
                onClick={handleFavoriteClick}
                className={`w-full py-2 rounded-full font-medium transition-colors
                    ${isFavorites 
                        ? "bg-rose-50 text-rose-600 hover:bg-rose-100" 
                        : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                    }
                `}
            >
                {isFavorites ? "Remove from Favorties": "Add to Favorites"}
            </button>
        </div>
    );
}

// Export ArticleCard component
export default ArticleCard;
