// Import useDispatch hook to send actions to Redux store
import { useDispatch } from "react-redux";

// Import useState hook to track state in a function component
import { useState } from "react";

// Import action to update search input in articles slice
import { setSearchInput } from "../features/articles/articlesSlice";


// This component provides a text input field that allows
// users to search articles. The search input is stored
// in the Redux state and used for filtering articles.
function SearchBar() {

    // Initialize dispatch function
    const dispatch = useDispatch();

    // Initialize useState 
    const [searchText, setSearchText] = useState("");

    // Captures user input and dispatches it to Redux
    // store on every change.
    return(
        <div className="flex gap-2">
            <input
            type="text"
            placeholder="Search articles"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            onKeyDown={(e) => {
                if(e.key === "Enter"){
                    dispatch(setSearchInput(searchText))
                }
            }}
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            />

            <button
            onClick={() => dispatch(setSearchInput(searchText))}
            className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
            >Search</button>    
        </div>
    );
}

// Export SearchBar component
export default SearchBar;
