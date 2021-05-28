import { RECEIVE_ALL_POKEMON } from "../actions/pokemon_actions";

const pokemonReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            // action.pokemons.forEach(pokemon => nextState[pokemon.id] = pokemon);
            return Object.assign(nextState, action.pokemon);
        default:
            return state;
    }
}

export default pokemonReducer;