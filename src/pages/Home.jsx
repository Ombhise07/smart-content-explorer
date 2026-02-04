import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchArticles } from "../features/articles/articlesSlice";
import ArticleCard from "../components/ArticleCard";

function Home() {

    const dispatch = useDispatch();
    const {articles, loading, error} = useSelector((state) => state.articles);

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
        <div>
            <h1>Articles</h1>
            <ul>
                 {articles.map((article) => (
                    <ArticleCard key={article.id} article={article}/>
            ))}
            </ul>
        </div>
        </>
    )
}

export default Home;