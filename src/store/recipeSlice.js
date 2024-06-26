import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recipes: {
        name: "",
        ingredients: [{}],
    },
};
// { name: 'recipe name', ingredients: [{ name: 'ingredient name', amount: 'amount', unit: 'unit' }] }

const recipeSlice = createSlice({
    name: "recipe",
    initialState,
    reducers: {
        addRecipeName: (state, action) => {
            state.recipes.name = action.payload;
        },
        addIngredient: (state, action) => {
            console.log(action.payload, "action.payload");
            state.recipes.ingredients = action.payload;
        },
    },
});

export const { addRecipe, addIngredient } = recipeSlice.actions;
export default recipeSlice.reducer;
