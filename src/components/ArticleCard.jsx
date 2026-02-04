function ArticleCard({article}) {
    return (
        <div style={{border:"1px solid #ddd", padding: "16px", marginBottom: "12px"}}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <p>Author: {article.user.name}</p>
        </div>
    );
}

export default ArticleCard