import { useEffect, useState } from "react";
import {fetchPokemonDetail} from '../api/Api';
const Pokemon = ({pokemonData}) =>{
    const [url, setUrl] = useState();
    const [pokemonDetail, setPokemonDetail] = useState();
    useEffect(()=>{
        if(url){
            fetchPokemonDetail(url).then(res=>{
                console.log(res?.data)
            })
        }
    },[url])
    return(
        <div className="pokemon">
            <p onClick={()=>setUrl(pokemonData?.url)}>{pokemonData?.name}</p>
        </div>
    )
}

export default Pokemon;