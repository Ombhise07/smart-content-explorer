// Import configureStore from Redux Toolkit
// configureStore simplifies store setup by providing good defaults
import {configureStore} from "@reduxjs/toolkit"

// Import reducers from different feature slices
// articlesReducer -> manages article-related state
// favoritesReducer -> manages favorite articles state
import  articlesReducer  from "../features/articles/articlesSlice"
import favoritesReducer from "../features/favorites/favoritesSlice"

// Redux Store Configuration
// The store is the central place that holds the entire
// application state. All reducers are combined here.
export const store = configureStore({
    reducer: {
        // Articles slice reducer
        articles: articlesReducer,

        // Favorites slice reducer
        favorites: favoritesReducer,
    },
});

// Export the store so it can be provided to the React app
// using the <Provider> component from react-redux
export default store;