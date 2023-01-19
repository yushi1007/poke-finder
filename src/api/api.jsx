import axios from "axios";
const API_BASE_URL = "https://pokeapi.co/api/v2/";

export const getPokemonsSize = async () => {
    try {
        const url = API_BASE_URL + "pokemon?limit=100000&offset=0";
        const { data } = await axios(url);
        return data?.count;
    } catch (err) {
        console.log(err);
    }
};

// Fetch all the pokemons' name and link
export const fetchAllPokemons = async (id) => {
    try {
        const url = API_BASE_URL + `pokemon/${id}`;
        const result = await axios(url);
        // console.log(result)
        return result?.status === 200 ? result?.data : null; 
    } catch (err) {
        // console.log(err);
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
    let pokemonArray = [];
    data.forEach(async (pokemon) => {
        pokemonArray.push(await fetchPokemonDetail(pokemon.url))
    })
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

//Fetch single Pokemon data
export const getPokemonDataById = async (id) => {
    try {
        const url = API_BASE_URL + `pokemon/${id}`;
        const result = await axios(url);
        return result?.status === 200 ? result?.data : null; 
    } catch (err) {
        console.log(err);
    }
};


// fetch Ability detail

export const fetchAbilityDetail = async (url) => {
    try {
        const result = await axios(url);
        console.log(result)
        return result?.status === 200 ? result?.data : null; 
    } catch (err) {
        console.log(err);
    }
};