import "./App.scss";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Header from "./container/Header";
import { fetchAllPokemons, getPokemonsSize } from "./api/Api";
import Footer from "./container/Footer";
import PokemonDetails from "./pages/PokemonDetails";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("Any type");
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
    setSearchTerm(event.currentTarget.id);
  };

  const searchPokemons = pokemons?.filter((pokemon) =>
    pokemon?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // const filterPokemons = searchPokemons?.filter((pokemon) => {
  //   console.log(pokemon);
  //   if (filterBy.includes("Any Type")) {
  //     return pokemon;
  //   }
  // });
  
  return (
    <div className="App">
      <Header handleSearch={handleSearch} />
      <Home
        pokemons={searchPokemons}
        searchTerm={searchTerm}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        handleTypeFilter={handleTypeFilter}
      />
      <PokemonDetails />
      <Footer />
    </div>
  );
}

export default App;
