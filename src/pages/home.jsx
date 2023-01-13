import { useEffect, useState } from "react";
import Card from "../components/Card";
import {fetchAllPokemons} from '../api/Api';
import Pokemons from "../components/Pokemons";
const Home = () =>{
    const [pokemons, setPokemons] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
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
        <div id="Home" className="theme__white container">
            <Pokemons data={pokemons}/>
        </div>
    )
}

export default Home;