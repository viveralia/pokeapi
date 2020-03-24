import { FETCH_ALL_POKEMON, FETCH_ALL_POKEMON_ERROR } from "../types";
import axios from "../../services";

export const fetchPokemon = (endpoint = "/pokemon") => {
  return dispatch => {
    dispatch({
      type: FETCH_ALL_POKEMON,
      payload: null
    });
    axios
      .get(endpoint)
      .then(res =>
        dispatch({
          type: FETCH_ALL_POKEMON,
          payload: res.data
        })
      )
      .catch(error =>
        dispatch({
          type: FETCH_ALL_POKEMON_ERROR,
          payload: error.message
        })
      );
  };
};
