import "./App.scss";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Header from "./container/Header";
import { fetchAllPokemons, getPokemonsSize } from "./api/Api";
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

  const getPokemonList = async () => {
    let pokemonArray = [];

    for (let i = 1; i <= 20; i++) {
      let pokemonData = await fetchAllPokemons(i);
      if (pokemonData) {
        pokemonArray.push(pokemonData);
      }
    }
    setPokemons(pokemonArray);
    setFilteredPokemons(pokemonArray);
    setLoading(false);
  };

  useEffect(() => {
    getPokemonsSize();
    getPokemonList();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTypeFilter = (event) => {
    console.log(event.target.innerText)
    setFilterTerm(event.target.innerText);
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
