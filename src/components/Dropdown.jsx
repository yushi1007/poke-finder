import { useDispatch } from "react-redux";
import {freezeBody} from '../util/util'

const Dropdown = ({ pokemon }) => {
    const dispatch = useDispatch();

    const setPokemonId = () =>{
      dispatch({ pokemonId: pokemon?.id ,type: "SET_SELECTED_POKEMON" });
      freezeBody()
    }

  return (
    <div className="dropdown-item" onClick={setPokemonId}>
      <span>{pokemon?.name}</span>
      <img src={pokemon?.sprites?.other["official-artwork"]?.front_default} alt={pokemon?.name} />
    </div>
  );
};

export default Dropdown;
