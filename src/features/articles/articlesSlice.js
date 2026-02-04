import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    articles: [],
    loading: false,
    error: null,
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
    reducers: { // for search logic

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

export const {} = articlesSlice.actions

export default articlesSlice.reducer;