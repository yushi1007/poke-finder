import React from "react";

const PokemonTypes = ({ pokemonDetail }) => {
  const pokemonTypes = pokemonDetail?.types.map((pokemonType, index) => {
    return <p key={index} className={pokemonType?.type?.name}>{pokemonType?.type?.name}</p>;
  });
  return <React.Fragment>{pokemonTypes}</React.Fragment>;
};

export default PokemonTypes;
