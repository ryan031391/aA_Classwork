import React from 'react'

class PokemonDetail extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.requestPokemon(this.props.match.params.pokemonId)
    }

    componentDidUpdate(prevProp) {
        if (this.props.match.params.pokemonId !== prevProp.match.params.pokemonId) {
            this.props.requestPokemon(this.props.match.params.pokemonId)
        }
    }


    render() {
        const pokemon = this.props.pokemon[0]
        const items = this.props.pokemon[1]
        const moves = this.props.pokemon[2].map((ele) => ele.name)
        if (this.props.pokemon[0] === undefined) {
            return <div></div>
        } else {
            return (
                <section className="pokemon-detail">
                    <figure><img src={pokemon.imageUrl}/></figure>
                    <ul>
                        <li><h3>{pokemon.name}</h3></li>
                        <li>Type: {pokemon.pokeType}</li>
                        <li>Attack: {pokemon.attack}</li>
                        <li>Defense: {pokemon.defense}</li>
                        <li>Moves: {moves.join(", ")}</li>
                    </ul>
                    <section className='toys'>
                        <h3>Items</h3>
                        <ul className='toy-list'>
                            {items.map((item) => {
                                return <li><img src={item.imageUrl}/></li>
                            })}
                        </ul>
                    </section>
                </section>
            )
        }
    }
}


export default PokemonDetail