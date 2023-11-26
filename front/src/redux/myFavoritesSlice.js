import { createSlice } from "@reduxjs/toolkit";

export const myFavoritesSlice = createSlice({
	name: "myFavorites",
	initialState: {
		myFavorites: [],
	},
	reducers: {
		getAllFavorites: (state, action) => {
			state.myFavorites = action.payload;
		},
		filterFavorites: (state, action) => {
			state.myFavorites = action.payload;
		},
		orderFavorites: (state, action) => {
			state.myFavorites = action.payload;
		},
	},
});

export const { getAllFavorites, filterFavorites, orderFavorites } =
	myFavoritesSlice.actions;

export default myFavoritesSlice.reducer;
