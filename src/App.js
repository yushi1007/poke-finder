import "./App.scss";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Header from "./container/Header";
import { fetchSinglePokemonDetail, getPokemonsSize, getAllPokemonData } from "./api/Api";
import Footer from "./container/Footer";
import PokemonDetails from "./pages/PokemonDetails";

function App() {
  const [filterTerm, setFilterTerm] = useState("");
  const [pokemons, setPokemons] = useState();
  const [filteredPokemons, setFilteredPokemons] = useState();
  const [loading, setLoading] = useState(true);
  const [allPokemons, setAllPokemons] = useState([]);

  const getPokemonList = async () => {
    let pokemonArray = [];

    for (let i = 1; i <= 400; i++) {
      let pokemonData = await fetchSinglePokemonDetail(i);
      if (pokemonData) {
        pokemonArray.push(pokemonData);
      }
    }
    setPokemons(pokemonArray);
    setLoading(false);
  };

  const getAllPokemons = async() =>{
    let pokemons = await getAllPokemonData();
    setAllPokemons(pokemons)
  }

  useEffect(() => {
    getPokemonsSize();
    getPokemonList();
    getAllPokemons();
  }, []);

  const handleTypeFilter = async(event) => {
      let filterType = event.target.innerText;
      setFilterTerm(filterType);
  };

  // const handleTypeFilter = async(event) => {
  //   let filterType = event.target.innerText;
  //   setFilterTerm(filterType);
  //   let pokemons = filteredPokemons.filter(pokemon=>{
  //     let result = false;
  //     pokemon?.types?.forEach(type=>{
  //       console.log(type)
  //       if(!result){
  //         result = type.type.name.toUpperCase() === filterType.toUpperCase()
  //         console.log(result)
  //       }
  //     })
  //     return result;
  //   })
  //   setFilteredPokemons(pokemons)
  // };
  
  return (
    <div className="App">
      <Header pokemons={pokemons} />
      <Home
        pokemons={pokemons}
        filterTerm={filterTerm}
        setFilterTerm={setFilterTerm}
        handleTypeFilter={handleTypeFilter}
      />
      <PokemonDetails />
      <Footer />
    </div>
  );
}

export default App;
