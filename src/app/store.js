import {configureStore} from "@reduxjs/toolkit"
import  articlesReducer  from "../features/articles/articlesSlice"
import favoritesReducer from "../features/favorites/favoritesSlice"

export const store = configureStore({
    reducer: {
        articles: articlesReducer,
        favorites: favoritesReducer,
    },
});

export default store;