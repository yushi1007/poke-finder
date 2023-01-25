import "./App.scss";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Header from "./container/Header";
import { fetchSinglePokemonDetail, getPokemonsSize, getAllPokemonData } from "./api/Api";
import Footer from "./container/Footer";
import PokemonDetails from "./pages/PokemonDetails";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [pokemons, setPokemons] = useState();
  const [filteredPokemons, setFilteredPokemons] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pageNum, setPageNum] = useState(1);
  const [allPokemons, setAllPokemons] = useState([]);

  const getPokemonList = async () => {
    let pokemonArray = [];

    for (let i = 1; i <= 100; i++) {
      let pokemonData = await fetchSinglePokemonDetail(i);
      if (pokemonData) {
        pokemonArray.push(pokemonData);
      }
    }
    setPokemons(pokemonArray);
    setFilteredPokemons(pokemonArray);
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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // handle filter type click
  const handleTypeFilter = async(event) => {
    let filterType = event.target.innerText;
    setFilterTerm(filterType);
    // setFilteredPokemons
    let pokemons = allPokemons.filter(pokemon=>{
      let result = false;
      pokemon?.data?.types.forEach(type=>{
        if(!result){
          result = type.type.name.toUpperCase() === filterType.toUpperCase()
        }
      })
      return result;
    })
    console.log(pokemons)
    setFilteredPokemons(pokemons)
  };

  // const searchPokemons = pokemons?.filter((pokemon) =>
  //   pokemon?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const filterPokemon = () => {
    console.log(pokemons)
  }
  
  return (
    <div className="App">
      <Header handleSearch={handleSearch} />
      <Home
        pokemons={filterTerm ? filteredPokemons : pokemons}
        // searchTerm={searchTerm}
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
