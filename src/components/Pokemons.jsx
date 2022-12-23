import { useEffect, useState } from "react"
import Pokemon from "./pokemon"
import {fetchPokemonDetail, fetchPokemons} from '../api/Api';
const Pokemons = ({data}) =>{
    const [pokemonsData, setPokemonsData] = useState([]);
    useEffect(()=>{
        // data?.forEach(p=>{
        //     fetchPokemonDetail(p?.url).then(res=>{

        //         setPokemonsData(prevState => [...prevState, res.data.sprites] )
        //     })
        // })
        fetchPokemons(1).then(res=>{
            console.log(res)
        })
        console.log(pokemonsData)
    },[data])
    const renderPokemons = () =>{
        return data?.map((pokemon, index)=>{
            return <Pokemon key={index} pokemonData={pokemon} />
        })
    }

    const showData = () =>{
        console.log(JSON.stringify(pokemonsData))
    }
    return(
        <div className="pokemons">
            <button onClick={()=>showData()}>click</button>
            {renderPokemons()}
        </div>
    )
}

export default Pokemons;