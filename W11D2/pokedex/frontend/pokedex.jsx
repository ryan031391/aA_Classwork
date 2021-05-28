import React from "react";
import ReactDOM from "react-dom";
import {receiveAllPokemon, requestAllPokemon} from "./actions/pokemon_actions";
import {fetchAllPokemon} from "./util/api_util";
import configureStore from "./store/store";
import {selectAllPokemons} from "./reducers/selectors";
import Root from "./components/root"

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    const store = configureStore();
    window.store = store;

    window.receiveAllPokemon = receiveAllPokemon;
    window.fetchAllPokemon = fetchAllPokemon;
    window.requestAllPokemon = requestAllPokemon;
    // window.getState = store.getState; 
    // window.dispatch = store.dispatch;
    window.selectAllPokemons = selectAllPokemons;

    ReactDOM.render(<Root store={store}/>, rootEl);
});

