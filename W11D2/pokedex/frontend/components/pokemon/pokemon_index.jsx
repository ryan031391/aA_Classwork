import React from "react";

class PokemonIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestAllPokemon()
    }

    render() {
        return (
            <ul>
                <h1>Pokelist</h1>
                {this.props.pokemons.map((poke) => {
                    <EachPokemon key={poke.id} pokemon={}/>
                })}
            </ul>
        )
    }
}

export default PokemonIndex;