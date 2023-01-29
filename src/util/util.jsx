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


export const getTotalStat = (stats) =>{
    let total = 0;
    stats?.forEach(stat=>{
        total+= stat?.base_stat
    })
    return total;
}

export const convertStatName = (statName) =>{
    switch(statName){
        case "hp":
            return "HP";
        case "attack":
            return "ATK"
        case "defense":
            return "DEF"
        case "special-attack":
            return "SpA"
        case "special-defense":
            return "SpD"
        case "speed":
            return "SPD"
        default:
            return;
    }
}

export const displayUnit = (measurement) =>{
    switch(measurement){
        case 'Weight':
            return 'Kilograms';
        case 'Height':
            return 'Meter';
        default:
            return '';
    }
}