import {useDispatch} from "react-redux";
import { setSelectedTag } from "../features/articles/articlesSlice";

const tags = ["react", "javascript", "webdev", "frontend"];

function TagFilter() {

    const dispatch = useDispatch();

    return(
        <div style={{marginBottom: "16px"}}>
            {tags.map((tag) => (
                <button 
                key={tag}
                onClick={() => {dispatch(setSelectedTag(tag))}}
                style={{marginRight:"8px"}}>
                    {tag}
                </button>
            ))}

            <button onClick={() => dispatch(setSelectedTag(""))}>
                Clear
            </button>
        </div>
    );
}

export default TagFilter;