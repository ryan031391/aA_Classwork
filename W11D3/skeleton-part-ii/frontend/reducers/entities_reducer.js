import {combineReducers} from 'redux';
import pokemonReducer from './pokemon_reducer';
import moveReducer from './move_reducer'
import itemReducer from './item_reducer'


const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
  items: itemReducer,
  moves: moveReducer
})

export default entitiesReducer;