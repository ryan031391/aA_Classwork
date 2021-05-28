export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon)
}

export const selectPokemon = (state, id) => {
  let out = []
  out.push(state.entities.pokemon[id])
  out.push(Object.values(state.entities.items))
  out.push(Object.values(state.entities.moves))
  return out
}
  