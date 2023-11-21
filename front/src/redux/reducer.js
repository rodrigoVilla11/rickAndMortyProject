import {
	GET_CHARACTER,
	REMOVE_CHARACTER,
	FILTER,
	ORDER,
	CLEANFAV,
} from "./actions";

export const initialState = {
	myFavorites: [],
	allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CHARACTER:
			return {
				...state,
				myFavorites: [...state.myFavorites, action.payload],
				allCharacters: [...state.myFavorites, action.payload],
			};
		case REMOVE_CHARACTER:
			return {
				...state,
				myFavorites: state.myFavorites.filter(
					(char) => char.id !== action.payload
				),
			};
		case FILTER:
			return {
				...state,
				myFavorites: state.allCharacters.filter(
					(char) => char.gender === action.payload
				),
			};
		case ORDER:
			return {
				...state,
				myFavorites: [
					...state.allCharacters.sort((a, b) => {
						if ("Ascendente" === action.payload) return a.id - b.id;
						if ("Descendente" === action.payload) return b.id - a.id;
					}),
				],
			};
		case CLEANFAV:
			return {
				...state,
				myFavorites: [],
				allCharacters: [],
			};
		default:
			return { ...state };
	}
};
export default rootReducer;
