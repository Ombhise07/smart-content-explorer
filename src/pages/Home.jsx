import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchArticles } from "../features/articles/articlesSlice";

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
                <li>
                    {console.log(article.id)}
                    {console.log(article.title)}
                    {console.log(article.user.name)}
                    <div key={article.id}>
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <p>{article.user.name}</p>
                    </div>
                </li>
            ))}
            </ul>
        </div>
        </>
    )
}

export default Home;