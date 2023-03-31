import axios from "axios";

export const GET_CHARACTER = "GET_CHARACTER";
//export const ADD_CHARACTER = "ADD_CHARACTER";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const removeCharacter = (id) => {
	return { type: REMOVE_CHARACTER, payload: id };
};

export const filterCards = (gender) => {
	return { type: FILTER, payload: gender };
};

export const orderCards = (id) => {
	return { type: ORDER, payload: id };
};

export const getFavorites = () => {
	try {
		return async function (dispatch) {
			const response = await axios.get(
				`http://localhost:3001/rickandmorty/fav`
			);
			dispatch({ type: GET_CHARACTER, payload: response.data });
		};
	} catch (error) {
		return { error: error.message };
	}
};
