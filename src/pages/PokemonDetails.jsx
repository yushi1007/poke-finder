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
        dispatch({ type: "CLEAR_SELECTION" });
        freezeBody(false)
    }
    useEffect(()=>{
        if(pokemonId){
            fetchPokemonData(pokemonId);
        }else{
            setPokemonData(null)
        }
    },[pokemonId])
    
    const fetchPokemonData = (id) =>{
        getPokemonDataById(pokemonId)
        .then(pokemon=>{
            if(pokemon){
                console.log(pokemon)
                setPokemonData(pokemon)
            }
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