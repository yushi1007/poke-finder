import './App.scss';
import { useEffect, useState } from "react";
import Home from './pages/Home';
import Header from './container/Header';
import { fetchAllPokemons } from '../src/api/Api';

function App() {
  const [pokemons, setPokemons] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetchAllPokemons().then(pokemonData=>{
        if(pokemonData){
            setPokemons(pokemonData);
            setError(false);
        }else{
            setError(true);
        }
        setLoading(false);
    })
},[])

  return (
    <div className="App">
      <Header />
      <Home pokemons={pokemons} />
    </div>
  );
}

export default App;
