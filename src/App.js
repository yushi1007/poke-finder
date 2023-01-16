import "./App.scss";
import Home from "./pages/Home";
import Header from "./container/Header";
import { useState, useEffect } from "react";
import {fetchAllPokemons} from '../src/api/Api';

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [pokemons, setPokemons] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchAllPokemons().then((pokemonData) => {
            if (pokemonData) {
                setPokemons(pokemonData);
                setError(false);
            } else {
                setError(true);
            }
            setLoading(false);
        });
    }, []);

    const handleSearchTerm = (name, event) =>{
      event.preventDefault();
      setSearchTerm(name)
    }

    return (
        <div className="App">
            <Header handleSearchTerm={handleSearchTerm}/>
            <Home pokemons={pokemons} searchTerm={searchTerm} />
        </div>
    );
}

export default App;
