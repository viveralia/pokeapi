import { FETCH_ALL_POKEMON, FETCH_ALL_POKEMON_ERROR } from "../types";

const initialState = {
  pokemon: null,
  error: null
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_POKEMON:
      return {
        ...state,
        pokemon: action.payload
      };
    case FETCH_ALL_POKEMON_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default pokemonReducer;
