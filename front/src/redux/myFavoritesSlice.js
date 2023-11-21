import { createSlice } from "@reduxjs/toolkit";

export const myFavoritesSlice = createSlice({
	name: "myFavorites",
	initialState: {
		myFavorites: [],
		detail: {},
	},
	reducers: {
		getAllFavorites: (state, action) => {
			state.myFavorites = action.payload;
		},
	},
});

export const { getAllFavorites } = myFavoritesSlice.actions;

export default myFavoritesSlice.reducer;
