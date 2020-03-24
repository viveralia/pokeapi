import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import PokemonList from "./components/PokemonList";
import PokemonSingle from "./components/PokemonSingle";

const Routes = () => {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/pokemon" />} />
          <Route exact path="/pokemon" component={PokemonList} />
          <Route exact path="/pokemon/:name" component={PokemonSingle} />
        </Switch>
      </Provider>
    </Router>
  );
};

export default Routes;
