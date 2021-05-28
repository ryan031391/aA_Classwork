import {connect} from "react-redux";
import {selectAllPokemons} from "../../reducers/selectors";
import {requestAllPokemon} from "../../actions/pokemon_actions";
import PokemonIndex from "./pokemon_index";

const mapStateToProps = state => ({
    pokemons: selectAllPokemons(state)
});
  
const mapDispatchToProps = dispatch => ({
    requestAllPokemon: () => dispatch(requestAllPokemon())
});


export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex)
