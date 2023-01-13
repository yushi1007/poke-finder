import { useEffect, useState } from "react";
import {fetchPokemonDetail} from '../api/Api';
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

    return(
        <div className="pokemon">
            <img src={pokemonDetail?.sprites?.front_default} alt={pokemonDetail?.name} />
        </div>
    )
}

export default Pokemon;