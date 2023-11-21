import axios from "axios";
export const GET_CHARACTER = "GET_CHARACTER";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const CLEANFAV = "CLEANFAV";

export const addCharacter = async (user) => {
	try {
		await axios.post("http://localhost:3001/rickandmorty/fav", user);
		console.log("ok");
	} catch (error) {
		return { error: error.message };
	}
};

export const getCharacter = (user) => {
	return (dispatch) => {
		axios
			.get("http://localhost:3001/rickandmorty/fav", {
				params: {
					user: user,
				},
			})
			.then((res) => console.log(res.data))
			.then((data) => dispatch({ type: GET_CHARACTER, payload: data }))
			.catch((error) => console.log(error));
	};
};

export const removeCharacter = (id, user) => {
	return async (dispatch) => {
		await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);

		dispatch({ type: REMOVE_CHARACTER, payload: id });
	};
};

export const filterCards = (gender) => {
	return { type: FILTER, payload: gender };
};

export const orderCards = (id) => {
	return { type: ORDER, payload: id };
};

export const cleanFavs = () => {
	return { type: CLEANFAV };
};
