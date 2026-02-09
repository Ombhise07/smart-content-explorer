// Import createSlice from Redux Toolkit
// createSlice helps in creating reducer logic along with actions
import { createSlice } from "@reduxjs/toolkit";

// This state stores all articles that the user has
// marked as favorites.
const initialState = {
    favorites: [], // Array to store favorite articles
};

// This slice manages the logic for adding and removing
// articles from the favorites list.
export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,

    // Handles synchronous actions related to favorites.
    reducers: {

         // Adds an article to the favorites list
        addToFavorites: (state,action) => {
            state.favorites.push(action.payload)
        },

        // Removes an article from favorites using article ID
        removeFavorite: (state,action) => {
            state.favorites = state.favorites.filter(
                (article) => article.id !== action.payload 
            );
        },
    },
})

// Export action creators
export const {addToFavorites, removeFavorite} = favoritesSlice.actions;

// Export reducer to be included in Redux store
export default favoritesSlice.reducer; 