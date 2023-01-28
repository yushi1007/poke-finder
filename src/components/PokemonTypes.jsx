import React from "react";

const PokemonTypes = ({ pokemonTypes }) => {
  const pokemonTypesName = pokemonTypes?.map((pokemonType, index) => {
    return <p key={index} className={`${pokemonType?.type?.name} type`}>{pokemonType?.type?.name}</p>;
  });
  return <React.Fragment>{pokemonTypesName}</React.Fragment>;
};

export default PokemonTypes;
