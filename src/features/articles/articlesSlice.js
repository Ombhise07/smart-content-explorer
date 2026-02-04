import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

// create initialState
const initialState = {
    articles: [],
    loading: false,
    error: null,
    searchInput: "",
    selectedTag: "",
};

// using async thunk for fetching articles
export const fetchArticles = createAsyncThunk(
    "articles/fetchArticles",
    async () => {
        const response = await fetch(`https://dev.to/api/articles`);
        return response.json();
    }
);

// creating the slice
export const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: { // for search and filter logic
        setSearchInput: (state,action) => {
            state.searchInput = action.payload;
        },

        setSelectedTag: (state,action) => {
            state.selectedTag = action.payload;
        },
    },

// extraReduces to handle the external function
    extraReducers: (builder) => {
        builder
        .addCase(fetchArticles.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchArticles.fulfilled, (state,action) => {
            state.loading = false;
            state.articles = action.payload;
        })
        .addCase(fetchArticles.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export const {setSearchInput, setSelectedTag} = articlesSlice.actions

export default articlesSlice.reducer;