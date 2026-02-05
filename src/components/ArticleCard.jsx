import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
import { addToFavorites, removeFavorite } from "../features/favorites/favoritesSlice";

function ArticleCard({article}) {

    const dispatch = useDispatch()
    const favorites = useSelector((state) => state.favorites.favorites);

    const isFavorites = article ? favorites.some((item) => item.id === article.id) : false;

    if(!article) return null;

    const handleFavoriteClick = () => {
        if(isFavorites){
            dispatch(removeFavorite(article.id))
        }
        else{
            dispatch(addToFavorites(article))
        }
    };

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

export default ArticleCard; 