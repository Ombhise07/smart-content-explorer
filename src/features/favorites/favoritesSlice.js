import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: [],
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites: (state,action) => {
            state.favorites.push(action.payload)
        },

        removeFavorite: (state,action) => {
            state.favorites = state.favorites.filter(
                (article) => article.id !== action.payload 
            );
        },
    },
})

export const {addToFavorites, removeFavorite} = favoritesSlice.actions;

export default favoritesSlice.reducer; 