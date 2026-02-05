 import { Link, useParams } from "react-router-dom";
 import { useSelector } from "react-redux";

 function ArticleDetails() {
    const {id} = useParams()
    const {articles} = useSelector((state) => state.articles)

    const article = articles.find(
        (item) => 
            item.id === Number(id)
    );

    if(!article){
        return <h2>Article Not Found</h2>
    }

    return (
        <div>
            <Link to="/">Back to Articles</Link>

            <h1>{article.title}</h1>
            <p>{article.description}</p>

            <p>
                <strong>Author:</strong> {article.user.name}
            </p>

            <p>
                <strong>Tags:</strong> {article.tag_list.join(",")}
            </p>

            <a href={article.url} target ="_blank" rel="noreferrer">
                Read original article on Dev.to
            </a>
        </div>
    )
 }

 export default ArticleDetails;