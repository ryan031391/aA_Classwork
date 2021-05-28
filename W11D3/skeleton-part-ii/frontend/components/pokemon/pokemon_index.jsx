import React from 'react';
import PokemonIndexItem from './pokemon_index_item'
import PokemonDetailContainer from './pokemon_detail_container'
import { Route } from 'react-router';


class PokemonIndex extends React.Component{
  constructor(props){
  super(props)
  }
  
  componentDidMount(){
  this.props.requestAllPokemon()
  }
  
  render(){
    return (
    <section className="pokedex">
      <ul>
      {this.props.pokemon.map((poke) => (
        <PokemonIndexItem key={poke.id} poke={poke}/>
      ))}
      </ul>
      <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer}/>
    </section>
    )
  }
  }
  
  
  
  export default PokemonIndex;