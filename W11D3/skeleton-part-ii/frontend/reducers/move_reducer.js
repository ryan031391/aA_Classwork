const moveReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type){
    case "RECEIVE_POKEMON":
        return action.pokemon.moves
    default:
      return state;
    }
  }

export default moveReducer