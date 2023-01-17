export const filterPokemonsByName = (pokemons, searchTerm) => {
    return pokemons?.filter((pokemon) => {
        return pokemon.name.includes(searchTerm);
    });
};