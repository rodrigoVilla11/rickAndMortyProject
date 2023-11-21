import axios from "axios";
import { getAllFavorites } from "./myFavoritesSlice";

export const getCharacters = (user) => (dispatch) => {
	axios
		.get("http://localhost:3001/rickandmorty/fav", {
			params: {
				user: user,
			},
		})
		.then((res) => dispatch(getAllFavorites(res.data)))
		.catch((e) => console.log(e));
};

export const postCharacters = (user) => (dispatch) => {
	axios
		.post("http://localhost:3001/rickandmorty/fav", user)
		.then((res) => res.data)
		.catch((e) => console.log(e));
};

export const deleteCharacters = (id, user) => (dispatch) => {
	axios
		.delete(`http://localhost:3001/rickandmorty/fav/${id}?user=${user}`)
		.then((res) => res.data)
		.catch((e) => console.log(e));
};
