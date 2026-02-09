// Import required utilities from Redux Toolkit
// createSlice -> helps create Redux slice with reducers and actions
// createAsyncThunk -> used for handling asynchronous logic like API calls
import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

// Initial state
// This object defines the default state for the articles feature of application
const initialState = {
    articles: [],       // Stores fetched articles data
    loading: false,     // Indicates whether an API request is in progress
    error: null,        // Stores error message if API request fails
    searchInput: "",    // Stores user Input for searching articles
    selectedTag: "",    // Stores the currently selected tag for filtering
};

// Async Thunk: Fetch All Articles
// This async function fetches all articles from the Dev.to API
// Redux Toolkit automatically generates pending, fulfilled,
// and rejected action types for this thunk
export const fetchArticles = createAsyncThunk(
    "articles/fetchArticles",
    async () => {
        const response = await fetch(`https://dev.to/api/articles`);
        return response.json();     // Return parsed JSON data
    }
);

// Async Thunk: Fetch Articles by Tag
// This async function fetches articles filtered by a sepcific tag.
// The tag value is passed as a parameter.
export const fetchTagedArticles = createAsyncThunk(
    "articles/fetchTagedArticles",
    async (tag) => {
        const url = `https://dev.to/api/articles?tag=${tag}`;

        const response = await fetch(url);
        return await response.json();       // Return filtered articles
    }
);

// Articles Slice
// createSlice automatically generates:
// - Action creators
// - Reducer functions
export const articlesSlice = createSlice({
    name: 'articles',
    initialState,

    // Reducers (Synchronous Logic)
    // These reducers update the state directly based on
    // user interactions such as search and tag selection.
    reducers: { 
        // Updates the search input value in the state
        setSearchInput: (state,action) => {
            state.searchInput = action.payload;
        },

        // Updates the selected tag value in the state
        setSelectedTag: (state,action) => {
            state.selectedTag = action.payload;
        },
    },

    // Extra Reducers
    // Handles state changes for async  thunks like API calls.
    extraReducers: (builder) => {
        builder

        // Fetch all articles - pending state
        .addCase(fetchArticles.pending, (state) => {
            state.loading = true;
            state.error = null;
        })

        // Fetch all articles - success state
        .addCase(fetchArticles.fulfilled, (state,action) => {
            state.loading = false;
            state.articles = action.payload;
        })

        // Fetch all articles - error state
        .addCase(fetchArticles.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        // Fetch tagged articles - pending state
        .addCase(fetchTagedArticles.pending, (state) => {
            state.loading = true;
            state.error = null;
        })

        // Fetch tagged articles - success state
        .addCase(fetchTagedArticles.fulfilled, (state, action) => {
            state.loading = false;
            state.articles = action.payload;
        })

        // Fetch tagged articles - error state
        .addCase(fetchTagedArticles.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

// Export synchronous action creators
export const {setSearchInput, setSelectedTag} = articlesSlice.actions;

// Export the reducer to be added to the Redux store
export default articlesSlice.reducer;