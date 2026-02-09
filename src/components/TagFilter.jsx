// Import useDispatch hook to dispatch actions to Redux store
import {useDispatch} from "react-redux";

// Import async thunk and reducer action for tag-based filtering
import { fetchTagedArticles, setSelectedTag } from "../features/articles/articlesSlice";

// Predefined list of tags used for filtering articles.
const tags = ["react", "javascript", "ai", "frontend"];

// This component allows users to filter articles based
// on predefined tags and also provides a clear option
// to reset the filter.
function TagFilter() {

    // Initialize dispatch function
    const dispatch = useDispatch();

    // Renders buttons for each tag and dispatches
    // corresponding actions on click.
    return(
        <div className="flex flex-wrap items-center gap-3 mb-4">
            
            {/* Render buttons for each tag */}
            {tags.map((tag) => (
                <button 
                    key={tag}

                    // Fetch articles based on selected tag
                    onClick={() => {dispatch(fetchTagedArticles(tag))}}
                    className="px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
                >
                    {tag}
                </button>
            ))}

            {/* Clear filter button */}
            <button 
                onClick={() => {
                    dispatch(setSelectedTag(""));   // Reset selected tag
                    dispatch(fetchTagedArticles(""));   // Fetch all articles
                }}
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors"
            >
                Clear
            </button>
        </div>
    );
}

// Export TagFilter component
export default TagFilter;
