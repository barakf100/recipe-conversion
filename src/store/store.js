import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./recipeSlice";
import darkThemeSlice from "./darkThemeSlice";

const store = configureStore({
    reducer: {
        recipeSlice,
        darkThemeSlice,
    },
});

export default store;
