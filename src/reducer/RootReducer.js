const initialState = {
    pokemonId:null,
    isPokemonDetailOpen: false,
}
export default function RootReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_SELECTED_POKEMON':
            return {pokemonId: action.pokemonId, isPokemonDetailOpen:true};
        case 'CLEAR_SELECTION':
            return {pokemonId: null, isPokemonDetailOpen:false};
        default:
            return state;
    }
};