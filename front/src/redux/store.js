import { configureStore } from "@reduxjs/toolkit";
import myFavorites from "./myFavoritesSlice";

export default configureStore({
	reducer: {
		myFavorites: myFavorites,
	},
});
