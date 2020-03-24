import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon } from "../../store/actions/pokemonActions";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Abilities from "./Abilities";

const PokemonSingle = () => {
  const dispatch = useDispatch();
  const { pokemon } = useSelector(({ pokemon }) => pokemon);
  const { name } = useParams();

  useEffect(() => {
    dispatch(fetchPokemon(`/pokemon/${name}`));
  }, [dispatch, name]);

  return (
    <Layout>
      <Grid item xs={12}>
        {pokemon && pokemon.abilities && (
          <Abilities abilities={pokemon.abilities} />
        )}
      </Grid>
    </Layout>
  );
};

export default PokemonSingle;
