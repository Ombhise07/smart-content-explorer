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
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <h2 className="text-2xl font-semibold text-gray-600">
                    Article Not Found
                </h2>
            </div>
        );
    }

    // Displays complete article details including title,
    // description, author, tags, and external link.
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">

                {/* Navigation link to return to articles list */}
                <Link 
                    to="/" 
                    className="inline-block mb-6 text-indigo-600 font-medium hover:underline"
                >
                    ← Back to Articles
                </Link>

                {/* Article title */}
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                    {article.title}
                </h1>

                {/* Article description */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {article.description}
                </p>

                {/* Article author */}
                <p className="text-gray-600 mb-3">
                    <strong className="text-gray-900">Author:</strong>{" "}
                    {article.user.name}
                </p>

                {/* Article tags */}
                <p className="text-gray-600 mb-6">
                    <strong className="text-gray-900">Tags:</strong>{" "}
                    {article.tag_list.join(", ")}
                </p>

                {/* External link to original article */}
                <a 
                    href={article.url} 
                    target ="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center px-5 py-2.5 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors"
                >
                    Read original article on Dev.to
                </a>

            </div>
        </div>
    )
 }

 // Export ArticleDetails component
 export default ArticleDetails;
