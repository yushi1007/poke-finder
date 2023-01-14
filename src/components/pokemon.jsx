import { useEffect, useState } from "react";
import {fetchPokemonDetail} from '../api/Api';
import PokemonTypes from "./PokemonTypes";
const Pokemon = ({pokemonData}) =>{
    const [pokemonDetail, setPokemonDetail] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(()=>{
        if(pokemonData?.url){
            fetchPokemonDetail(pokemonData?.url).then(res=>{
                if(res){
                    setPokemonDetail(res.data)
                    setError(false)
                } else {
                    setError(true)
                }
                setLoading(false)
            })
        }
    },[])
    console.log(pokemonDetail)
    return(
        <div className="pokemon">
            <p className="pokemon-id-back">{pokemonDetail?.id}</p>
            <div className="pokemon-image">
                <img src={pokemonDetail?.sprites?.front_default} alt={pokemonDetail?.name} />
            </div>
            <div className="pokemon-content">
                <div className="pokemon-body">
                    <p className="pokemon-id">{pokemonDetail?.id}</p>
                    <p className="pokemon-name">{pokemonDetail?.name}</p>    
                </div>
                <div className="pokemon-type">
                    <PokemonTypes pokemonDetail={pokemonDetail}/>
                </div>
                <div className="pokemon-stats">
                    <p className="height">{pokemonDetail?.height}cm</p>
                    <p className="weight">{pokemonDetail?.weight}kg</p>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;