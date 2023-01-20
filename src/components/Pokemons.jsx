import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import {fetchPokemonDetail} from '../api/Api';
import {formatId} from '../util/util'

const Pokemons = ({ pokemon }) => {
  const [pokemonDetail, setPokemonDetail] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  let pokemonId = formatId(pokemon?.id)
  let pokemonHeight = pokemon?.height/10;
  let pokemonWeight = pokemon?.weight/10;

  return (
    <div className="pokemon-card">
      <Pokemon
        pokemonId={pokemonId}
        pokemonStyleClassName={pokemon?.types[0]?.type?.name} 
        pokemonImage={pokemon?.sprites?.other["official-artwork"].front_default}
        pokemonName={pokemon?.name}
        pokemonTypes={pokemon?.types}
        pokemonHeight={pokemonHeight} 
        pokemonWeight={pokemonWeight}
        id={pokemon?.id}
        />
    </div>
  );
};

export default Pokemons;