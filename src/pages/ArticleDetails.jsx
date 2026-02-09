// Import Link for navigation and useParams for reading route parameters
import { Link, useParams } from "react-router-dom";

// Import useSelector to access Redux store state
import { useSelector } from "react-redux";

// This component displays detailed information about
// a single article selected by the user. The article
// ID is retrieved from the URL parameters.
function ArticleDetails() {

    // Extract article ID from URL parameters
    const {id} = useParams()

    // Access articles list from Redux store
    const {articles} = useSelector((state) => state.articles)

    // Finds the article that matches the ID from the URL.
    const article = articles.find(
        (item) => 
            item.id === Number(id)
    );

    // Handle case when article is not found
    if(!article){
        return <h2>Article Not Found</h2>
    }

    // Displays complete article details including title,
    // description, author, tags, and external link.
    return (
        <div>
            {/* Navigation link to return to articles list */}
            <Link to="/">Back to Articles</Link>

            {/* Article title */}
            <h1>{article.title}</h1>

            {/* Article description */}
            <p>{article.description}</p>

            {/* Article author */}
            <p>
                <strong>Author:</strong> {article.user.name}
            </p>

             {/* Article tags */}
            <p>
                <strong>Tags:</strong> {article.tag_list.join(",")}
            </p>

            {/* External link to original article */}
            <a href={article.url} target ="_blank" rel="noreferrer">
                Read original article on Dev.to
            </a>
        </div>
    )
 }

 // Export ArticleDetails component
 export default ArticleDetails;