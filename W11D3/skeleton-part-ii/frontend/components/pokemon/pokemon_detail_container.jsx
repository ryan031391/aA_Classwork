import React from 'react'
import PokemonDetail from './pokemon_detail'
import {selectPokemon} from '../../reducers/selectors'
import {requestPokemon} from '../../actions/pokemon_actions'
import { connect } from 'react-redux'

const mSTP = (state, args) => {
    return {
        pokemon: selectPokemon(state, args.match.params.pokemonId)
    }
}

export default connect(mSTP, {requestPokemon})(PokemonDetail)

