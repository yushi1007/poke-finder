import React, {useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import {formatId} from '../util/util'

const Pokemons = ({ pokemons }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const renderPokemons = () => {
    return pokemons?.map((pokemon, index) => {
      let pokemonId = formatId(pokemon?.id)
      let pokemonHeight = pokemon?.height/10;
      let pokemonWeight = pokemon?.weight/10;
      return(
        <Pokemon
          pokemonId={pokemonId}
          pokemonStyleClassName={pokemon?.types[0]?.type?.name} 
          pokemonImage={pokemon?.sprites?.other["official-artwork"]?.front_default}
          pokemonName={pokemon?.name}
          pokemonTypes={pokemon?.types}
          pokemonHeight={pokemonHeight} 
          pokemonWeight={pokemonWeight}
          id={pokemon?.id}
          />
      ) 
    });
  };

  return (
    <React.Fragment>
      {renderPokemons()}
    </React.Fragment>
  );
};

export default Pokemons;