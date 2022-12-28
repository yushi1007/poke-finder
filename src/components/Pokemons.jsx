import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import { fetchPokemonDetail, fetchPokemons } from "../api/Api";
const Pokemons = ({ data }) => {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [page, setPage] = useState(1);
  const num = 20;

  useEffect(() => {
    getPokemons(page, num);
  }, [page, num]);

  const getPokemons = (page, num) => {
    fetchPokemons(page, num).then((data) => {
      setPokemonsData(data);
    });
  };

  const renderPokemons = () => {
    return data?.map((pokemon, index) => {
      return <Pokemon key={index} pokemonData={pokemon} />;
    });
  };

  const showData = () => {
    console.log(JSON.stringify(pokemonsData));
  };
  return (
    <div className="pokemons">
      <button onClick={() => showData()}>click</button>
      {renderPokemons()}
    </div>
  );
};

export default Pokemons;
