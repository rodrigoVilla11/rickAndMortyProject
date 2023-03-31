import axios from "axios";
export const GET_CHARACTER = "GET_CHARACTER";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const CLEANFAV = "CLEANFAV";

export const addCharacter = async (character) => {
	try {
		const response = await axios.post(
			"http://localhost:3001/rickandmorty/fav",
			character
		);
		console.log("ok");
	} catch (error) {
		return { error: error.message };
	}
};

export const getCharacter = (character) => {
	return (dispatch) => {
		axios
			.get("http://localhost:3001/rickandmorty/fav")
			.then((res) => res.data)
			.then((data) => dispatch({ type: GET_CHARACTER, payload: data }));
	};
	//return { type: ADD_CHARACTER, payload: character };
};

export const removeCharacter = (id) => {
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
