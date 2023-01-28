const initialState = {
  pokemonId: null,
  isPokemonDetailOpen: false,
  isDropdownOpen: false,
};
export default function RootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SELECTED_POKEMON":
      return { pokemonId: action.pokemonId, isPokemonDetailOpen: true };
    case "CLEAR_SELECTION":
      return { pokemonId: null, isPokemonDetailOpen: false };
    case "SET_SHOW_DROPDOWN":
      return { isDropdownOpen: true };
    case "SET_HIDE_DROPDOWN":
      return { isDropdownOpen: false };
    default:
      return state;
  }
}
