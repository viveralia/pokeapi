import React, { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon } from "../../store/actions/pokemonActions";
import CardLoader from "./CardLoader";
import Layout from "../Layout";
import { Box, Button, Grid } from "@material-ui/core";
let PokemonCard = lazy(() => import("./PokemonCard"));

const PokemonList = () => {
  const dispatch = useDispatch();
  const { pokemon } = useSelector(({ pokemon }) => pokemon);

  useEffect(() => {
    dispatch(fetchPokemon("/pokemon"));
  }, [dispatch]);

  const getPaginationEndpoint = str => str.slice(25, str.length);
  const goToPage = page => {
    dispatch(fetchPokemon(getPaginationEndpoint(page)));
  };

  return (
    <Layout>
      {pokemon && pokemon.results
        ? pokemon.results.map(pokemon => (
            <Suspense key={pokemon.name} fallback={<CardLoader />}>
              <PokemonCard pokemon={pokemon} />
            </Suspense>
          ))
        : null}
      <Grid item xs={12}>
        <Box display="flex" justifyContent="flex-end" width="100%">
          {pokemon && pokemon.previous ? (
            <Button
              variant="outlined"
              color="primary"
              disableElevation
              style={{ marginRight: "1rem" }}
              onClick={() => goToPage(pokemon.previous)}
            >
              Previous
            </Button>
          ) : null}
          {pokemon && pokemon.next ? (
            <Button
              variant="outlined"
              color="primary"
              disableElevation
              onClick={() => goToPage(pokemon.next)}
            >
              Next
            </Button>
          ) : null}
        </Box>
      </Grid>
    </Layout>
  );
};

export default PokemonList;
