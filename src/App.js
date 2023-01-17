import './App.scss';
import axios from 'axios';
import { useEffect, useState } from "react";
import Home from './pages/Home';
import Header from './container/Header';
import { fetchAllPokemons, getPokemonsSize } from '../src/api/Api';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemons, setPokemons] = useState();
  const [filteredPokemons, setFilteredPokemons] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getPokemonList = async () => {
    let pokemonArray = [];
    let num = await getPokemonsSize();
    num = num ? num : 1000;
    console.log(num)
    for(let i = 1; i <= num; i++){
      let pokemonData = await fetchAllPokemons(i);
      if(pokemonData){
        pokemonArray.push(pokemonData);
      }
      // try{
      //   pokemonArray.push(await fetchAllPokemons(i));
      // }catch(e){
      //   console.log(e)
      // }
    }
    setPokemons(pokemonArray);
    setFilteredPokemons(pokemonArray);
    setLoading(false);
  }

  useEffect(()=>{
    getPokemonList();
},[])

const handleSearch = (event) =>{
  let value = event.target.value.toLowerCase();
  let result = [];
  console.log(value);
  result = pokemons.filter((data) => {
  return data?.name.search(value) != -1;
  });
  setFilteredPokemons(result);
}

  return (
    <div className="App">
      <Header handleSearch={handleSearch} />
      <Home pokemons={filteredPokemons} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
