import axios from "axios";
import {
	getAllFavorites,
	filterFavorites,
	orderFavorites,
} from "./myFavoritesSlice";

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

export const filterCards = (gender, allFavorites) => (dispatch) => {
	const filteredFavorites = allFavorites.filter(
		(favorite) => favorite.gender === gender
	);
	dispatch(filterFavorites(filteredFavorites));
};

export const orderCards = (order, allFavorites) => (dispatch) => {
	const copiedFavorites = [...allFavorites];
	const filteredFavorites = copiedFavorites.sort((a, b) => {
		if ("Ascendente" === order) return a.id - b.id;
		if ("Descendente" === order) return b.id - a.id;
	});
	console.log(filteredFavorites);
	dispatch(orderFavorites(filteredFavorites));
};
