export const filterPokemonsByName = (pokemons, searchTerm) => {
    return pokemons?.filter((pokemon) => {
        return pokemon.name.includes(searchTerm);
    });
};

export const formatId = (id) => {
    if(!id)return;
    let pokemonId = id.toString();
    if (pokemonId?.length === 1 && pokemonId?.length !== undefined) {
        pokemonId = "000" + pokemonId;
    } else if (pokemonId?.length === 2 && pokemonId?.length !== undefined) {
        pokemonId = "00" + pokemonId;
    } else if (pokemonId?.length === 3 && pokemonId?.length !== undefined) {
        pokemonId = "0" + pokemonId;
    } else {
        pokemonId = pokemonId;
    }
    return pokemonId;
};

export const freezeBody = (freeze = true) => {
    document.body.style.overflowY = freeze ? "hidden" : "scroll";
};
