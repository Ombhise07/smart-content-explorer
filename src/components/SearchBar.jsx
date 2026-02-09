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
        <input type="text"
         placeholder="Search articles"
         onChange={(e) => {dispatch(setSearchInput(e.target.value))}}
         style={{padding: "8px", width: "100%", marginBottom: "16px"}}
        />
    );
}

// Export SearchBar component
export default SearchBar;