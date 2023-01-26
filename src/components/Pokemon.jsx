import PokemonTypes from "./PokemonTypes";
import { useDispatch} from "react-redux";
import {freezeBody} from '../util/util'
import comingSoonImage from "../assets/img/comingsoon.png";
const Pokemon = ({
  pokemonId,
  pokemonStyleClassName,
  pokemonImage,
  pokemonName,
  pokemonTypes,
  pokemonHeight,
  pokemonWeight,
  id
}) => {
  const dispatch = useDispatch();

  const setPokemonId = () =>{
    dispatch({ pokemonId: id ,type: "SET_SELECTED_POKEMON" });
    console.log(id)
    freezeBody()
  }
  return (
    <div className="pokemon-card" onClick={setPokemonId}>
      <p className={`pokemon-id-back ${pokemonStyleClassName}`}>#{pokemonId}</p>
      <div className="pokemon-image">
        <img src={pokemonImage ? pokemonImage : comingSoonImage} alt={pokemonName} />
      </div>
      <div className="pokemon-content">
        <div className="pokemon-body">
          <p className="pokemon-id">#{pokemonId}</p>
          <h2 className="pokemon-name">{pokemonName}</h2>
        </div>
        <div className="pokemon-type">
          <PokemonTypes pokemonTypes={pokemonTypes} />
        </div>
        <div className="pokemon-stats">
          <p className="stat">{pokemonHeight}m</p>
          <p className="stat">{pokemonWeight}kg</p>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
