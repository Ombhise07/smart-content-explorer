import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchArticles } from "../features/articles/articlesSlice";
import ArticleCard from "../components/ArticleCard";
import SearchBar from "../components/SearchBar";

function Home() {

    const dispatch = useDispatch();
    const {articles, loading, error, searchInput} = useSelector((state) => state.articles);

    //Getting the search article
    const filterArticles = articles.filter((article) => 
        article.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch]);

    if(loading) {
        return <h2>Loading...</h2>
    }

    if(error){
        return <h2>Error Please Try again</h2>
    }

    return(
        <>
        <SearchBar />
        <div>
            <h1>Articles</h1>
            <ul>
                 {filterArticles.map((article) => (
                    <ArticleCard key={article.id} article={article}/>
            ))}
            </ul>
        </div>
        </>
    )
}

export default Home;