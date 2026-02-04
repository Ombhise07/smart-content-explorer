import { useDispatch } from "react-redux";
import { setSearchInput } from "../features/articles/articlesSlice";

function SearchBar() {

    const dispatch = useDispatch();

    return(
        <input type="text"
         placeholder="Search articles"
         onChange={(e) => {dispatch(setSearchInput(e.target.value))}}
         style={{padding: "8px", width: "100%", marginBottom: "16px"}}
        />
    );
}

export default SearchBar;