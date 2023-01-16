import { useEffect, useState } from "react";
import {fetchPokemonDetail} from '../api/Api';
import PokemonTypes from "./PokemonTypes";
const Pokemon = ({pokemonData}) =>{
    const [pokemonDetail, setPokemonDetail] = useState();
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(false);

    useEffect(()=>{
        // if(pokemonData?.url){
        //     fetchPokemonDetail(pokemonData?.url).then(res=>{
        //         if(res){
        //             setPokemonDetail(res.data)
        //             setError(false)
        //         } else {
        //             setError(true)
        //         }
        //         setLoading(false)
        //     })
        // }
    },[])
    
    let pokemonId = pokemonDetail?.id.toString();

    if(pokemonId?.length === 1 && pokemonId?.length !== undefined) {
        pokemonId = "000" + pokemonId;
    } else if(pokemonId?.length === 2 && pokemonId?.length !== undefined){
        pokemonId = "00" + pokemonId;
    }else if(pokemonId?.length === 3 && pokemonId?.length !== undefined){
        pokemonId = "0" + pokemonId;
    }else{
        pokemonId = pokemonId;
    }

    let pokemonHeight = pokemonDetail?.height/10;
    let pokemonWeight = pokemonDetail?.weight/10;

    return(
        <div className="pokemon">
            <p className={`pokemon-id-back ${pokemonDetail?.types[0]?.type?.name}`}>#{pokemonId}</p>
            <div className="pokemon-image">
                <img src={pokemonDetail?.sprites?.other["official-artwork"].front_default} alt={pokemonDetail?.name} />
            </div>
            <div className="pokemon-content">
                <div className="pokemon-body">
                    <p className="pokemon-id">#{pokemonId}</p>
                    <h2 className="pokemon-name">{pokemonDetail?.name}</h2>    
                </div>
                <div className="pokemon-type">
                    <PokemonTypes pokemonDetail={pokemonDetail}/>
                </div>
                <div className="pokemon-stats">
                    <p className="stat">{pokemonHeight}m</p>
                    <p className="stat">{pokemonWeight}kg</p>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;