import axios from "axios";

const API_BASE_URL = "https://pokeapi.co/api/v2/";

export const fetchAllPokemons = async () => {
    try {
        const url = API_BASE_URL + "pokemon?limit=100000&offset=0";
        const { data } = await axios(url);
        return data?.results;
    } catch (err) {
        console.log(err);
    }
};

export const fetchPokemons = async (page, num=20) => {
    try {
        const url = API_BASE_URL + `pokemon?limit=${num}&offset=${page - 1}`;
        const { data } = await axios(url);
        console.log(data.results);
        const pokemons = await data?.results?.map(poke=>{
            fetchPokemonDetail(poke?.url).then(res=>{
                return res
            })
        })
        console.log(pokemons)
    } catch (err) {
        console.log(err);
    }
};

export const fetchPokemonDetail = async (url) => {
    try {
        const data = await axios(url);
        console.log(url)
        return data;
    } catch (err) {
        console.log(err);
    }
};
