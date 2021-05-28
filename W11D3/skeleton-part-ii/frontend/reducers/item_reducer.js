const itemReducer = (state = {}, action) => {
    console.log(action)
    Object.freeze(state);
    switch (action.type){
    case "RECEIVE_POKEMON":
        return action.pokemon.items
    default:
      return state;
    }
  }

export default itemReducer