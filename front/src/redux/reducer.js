import { ADD_CHARACTER, REMOVE_CHARACTER, FILTER, ORDER } from "./actions"

export const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHARACTER:
            return  {...state, myFavorites: [...state.allCharacters ,action.payload], allCharacters: [...state.allCharacters, action.payload]}
        case REMOVE_CHARACTER:
            return  {...state, myFavorites: state.myFavorites.filter((char) => char.id !== action.payload)}
        case FILTER: 
            return {...state, myFavorites: state.allCharacters.filter((char) => char.gender === action.payload)}
        case ORDER:
            return {
                ...state, myFavorites: [...state.allCharacters.sort((a, b) => {
                    if ('Ascendente' === action.payload )
                     return a.id - b.id         
                    if ('Descendente' === action.payload  )
                     return b.id - a.id    
                })]
            }
        default:
            return {...state}
    }
}
export default rootReducer;