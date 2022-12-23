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
        // const pokemon = await data?.results?.map(poke=>{
        //     fetchPokemonDetail(poke?.url).then(res=>{
        //         return res
        //     })
        // })
        let results = await getPokemonArray(data?.results)
        console.log(await results)
    } catch (err) {
        console.log(err);
    }
};

const getPokemonArray = async (data) => {
    let pokemonArray = [];
    data.forEach(async (pokemon) => {
        pokemonArray.push(await fetchPokemonDetail(pokemon.url))
    })
    return pokemonArray;
}

export const fetchPokemonDetail = async (url) => {
    try {
        const data = await axios(url);
        return data;
    } catch (err) {
        console.log(err);
    }
};
