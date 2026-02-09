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
        <div style={{marginBottom: "16px"}}>
            
            {/* Render buttons for each tag */}
            {tags.map((tag) => (
                <button 
                key={tag}

                // Fetch articles based on selected tag
                onClick={() => {dispatch(fetchTagedArticles(tag))}}
                style={{marginRight:"8px"}}>
                    {tag}
                </button>
            ))}

            {/* Clear filter button */}
            <button onClick={() => {
                dispatch(setSelectedTag(""));   // Reset selected tag
                dispatch(fetchTagedArticles(""));   // Fetch all articles
            }
            }>
                Clear
            </button>
        </div>
    );
}

// Export TagFilter component
export default TagFilter;