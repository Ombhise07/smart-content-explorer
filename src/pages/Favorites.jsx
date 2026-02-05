import { useSelector } from "react-redux";
import ArticleCard from "../components/ArticleCard";
import { Link } from "react-router-dom";

function Favorites() {
    const favorites = useSelector((state) => state.favorites.favorites) || [];

    if (favorites.length === 0){
        return (
            <div>
                <h2>No favorites added yet </h2>
                <Link to="/">Go back to articles</Link>
            </div>
        );
    }

    return (
        <div>
            <h1>My Favorites</h1>

            {favorites.map((article) => (
                <ArticleCard key={article.key} article={article} />
            ))}
        </div>
    );
}

export default Favorites;