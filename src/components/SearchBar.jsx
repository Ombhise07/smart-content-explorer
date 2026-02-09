// Import useDispatch hook to send actions to Redux store
import { useDispatch } from "react-redux";

// Import action to update search input in articles slice
import { setSearchInput } from "../features/articles/articlesSlice";


// This component provides a text input field that allows
// users to search articles. The search input is stored
// in the Redux state and used for filtering articles.
function SearchBar() {

    // Initialize dispatch function
    const dispatch = useDispatch();

    // Captures user input and dispatches it to Redux
    // store on every change.
    return(
        <input
            type="text"
            placeholder="Search articles"
            onChange={(e) => {dispatch(setSearchInput(e.target.value))}}
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
        />
    );
}

// Export SearchBar component
export default SearchBar;
