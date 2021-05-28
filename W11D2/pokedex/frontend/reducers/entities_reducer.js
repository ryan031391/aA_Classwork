import {combineReducers} from "redux";
import pokemonsReducer from "./pokemon_reducer"

const entitiesReducer = combineReducers ({
    pokemons: pokemonsReducer,
    // moves: movesReducer,
    // items: itemsReducer,
})

export default entitiesReducer;