import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import {fetchPokemonDetail} from '../api/Api';
const Pokemons = ({ pokemon }) => {
  const [pokemonDetail, setPokemonDetail] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(()=>{
      if(pokemon?.url){
          fetchPokemonDetail(pokemon?.url).then(res=>{
              if(res){
                  setPokemonDetail(res.data)
                  setError(false)
              } else {
                  setError(true)
              }
              setLoading(false)
          })
      }
  },[])

  let pokemonId = pokemonDetail?.id.toString();

  if(pokemonId?.length === 1 && pokemonId?.length !== undefined) {
      pokemonId = "000" + pokemonId;
  } else if(pokemonId?.length === 2 && pokemonId?.length !== undefined){
      pokemonId = "00" + pokemonId;
  }else if(pokemonId?.length === 3 && pokemonId?.length !== undefined){
      pokemonId = "0" + pokemonId;
  }else{
      pokemonId = pokemonId;
  }

  let pokemonHeight = pokemonDetail?.height/10;
  let pokemonWeight = pokemonDetail?.weight/10;

  return (
    <div className="pokemon-card">
      <Pokemon
        pokemonId={pokemonId}
        pokemonStyleClassName={pokemonDetail?.types[0]?.type?.name} 
        pokemonImage={pokemonDetail?.sprites?.other["official-artwork"].front_default}
        pokemonName={pokemonDetail?.name}
        pokemonTypes={pokemonDetail?.types}
        pokemonHeight={pokemonHeight} 
        pokemonWeight={pokemonWeight}
        />
    </div>
  );
};

export default Pokemons;

  // const [pokemonsData, setPokemonsData] = useState([]);
  // const [page, setPage] = useState(1);
  // const num = 20;

  // useEffect(() => {
  //   getPokemons(page, num);
  // }, [page, num]);

  // const getPokemons = (page, num) => {
  //   fetchPokemons(page, num).then((data) => {
  //     setPokemonsData(data);
  //   });
  // };