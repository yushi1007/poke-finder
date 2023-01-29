import { useEffect, useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import {getPokemonDataById} from '../api/Api'
import PokemonDetailCard from "../components/PokemonDetailCard";
import PokemonSubDetail from "../components/PokemonSubDetail";
import {freezeBody} from '../util/util'
const PokemonDetails = () =>{
    const pokemonId = useSelector((state) => state.pokemonId);
    const dispatch = useDispatch();
    const [pokemonData, setPokemonData] = useState();
    const clearPokemonData = () =>{
        dispatch({ type: "CLEAR_POKEMON_ID" });
        dispatch({ type: "CLEAR_ABILITY_URL" })
        freezeBody(false)
    }
    useEffect(()=>{
        pokemonId ? fetchPokemonData(pokemonId) : setPokemonData(null);
    },[pokemonId])
    
    const fetchPokemonData = () =>{
        getPokemonDataById(pokemonId)
        .then(pokemon=>{
            setPokemonData(pokemon ? pokemon : null)
        })
    }

    return(
        <div id="PokemonDetailPage" className={`${pokemonId ? 'active':''}`} >
            <button onClick={clearPokemonData} className="close">Close</button>
            <div className="PokemonDetailPageBody">    
                <PokemonSubDetail data={pokemonData}/>
                <PokemonDetailCard data={pokemonData}/>
            </div>
        </div>
    )
}

export default PokemonDetails;