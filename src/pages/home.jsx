import { useEffect, useState } from "react";
import Card from "../components/PokemonTypes";
import Pokemons from "../components/Pokemons";
import { fetchPokemonDetail } from "../api/Api";
const Home = ({pokemons, searchTerm}) =>{
    const [pokemonsData, setPokemonsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(()=>{
        setLoading(true);
        fetchAllPokemonsInDetail();
    },[pokemons])

    const fetchAllPokemonsInDetail = async() =>{
        await pokemons?.map(async(pokemon)=>{
            if(pokemon?.url){
                await fetchPokemonDetail(pokemon?.url).then(res=>{
                    return res.data
                })
            }
        });
        setLoading(false);
    }
    return (
        <div id="Home" className="home container">
            <Pokemons data={pokemons} searchTerm={searchTerm}/>
        </div>
    )
}

export default Home;