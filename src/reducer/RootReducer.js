const initialState = {
  pokemonId: null,
  isDropdownOpen: false,
  abilityUrl: null,
};
export default function RootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SELECTED_POKEMON":
      state.pokemonId = action.pokemonId
      return { pokemonId: action.pokemonId };
    case "SET_ABILITY_URL":
      state.abilityUrl = action.abilityUrl;
      return {abilityUrl: action.abilityUrl};
    case "CLEAR_POKEMON_ID":
      return { pokemonId: null};
    case "CLEAR_ABILITY_URL":
      return { abilityUrl: null};
    case "SET_SHOW_DROPDOWN":
      return { isDropdownOpen: true };
    case "SET_HIDE_DROPDOWN":
      return { isDropdownOpen: false };
    default:
      return state;
  }
}
