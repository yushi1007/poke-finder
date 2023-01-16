import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import { fetchPokemons } from "../api/Api";
import { filterPokemonsByName } from "../util/util";
const Pokemons = ({ data, searchTerm }) => {
  const [page, setPage] = useState(1);
  const num = 20;

  useEffect(() => {
    // getPokemons(page, num);
  }, [data]);

  const renderPokemons = () => {
    console.log(data)
    let fileteredPokemons = filterPokemonsByName(data, searchTerm);
    console.log(fileteredPokemons)
    return fileteredPokemons?.map((pokemon, index) => {
      return <Pokemon key={index} pokemonData={pokemon} />;
    });
  };

  return (
    <div className="pokemons-box">
      {renderPokemons()}
    </div>
  );
};

export default Pokemons;
