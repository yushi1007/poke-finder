import axios from "axios";

const API_BASE_URL = "https://pokeapi.co/api/v2/";

// Fetch all the pokemons' name and link
export const fetchAllPokemons = async () => {
    try {
        const url = API_BASE_URL + "pokemon?limit=100&offset=0";
        const { data } = await axios(url);
        return data?.results;
    } catch (err) {
        console.log(err);
    }
};

// Get all Pokedmons 20 per page
export const fetchPokemons = async (page, num=20) => {
    try {
        const url = API_BASE_URL + `pokemon?limit=${num}&offset=${page - 1}`;
        const { data } = await axios(url);
        let results = await getPokemonArray(data?.results)
        return results;
    } catch (err) {
        console.log(err);
    }
};

//Fetch all Pokedmons in details
const getPokemonArray = async (data) => {
    let p1 = performance.now();
    let pokemonArray = [];
    data.forEach(async (pokemon) => {
        pokemonArray.push(await fetchPokemonDetail(pokemon.url))
    })
    let p2 = performance.now();
    console.log(p2-p1)
    return pokemonArray;
}

// Get single Pokedmon in detail
export const fetchPokemonDetail = async (url) => {
    try {
        const data = await axios(url);
        return data;
    } catch (err) {
        console.log(err);
    }
};

// Search Pokemons