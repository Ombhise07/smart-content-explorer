import {Link} from "react-router-dom";

function ArticleCard({article}) {
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
        </div>
    );
}

export default ArticleCard; 