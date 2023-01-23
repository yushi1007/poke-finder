import React from "react";
import Pokemons from "../components/Pokemons";
import Filter from "../container/Filter";

const Home = ({ pokemons }) => {
  const renderPokemons = () => {
    return pokemons?.map((pokemon, index) => {
      return <Pokemons key={index} pokemon={pokemon} />;
    });
  };

  return (
    <div id="Home" className="pokemons-container container">
      <div className="filter-section">
        <Filter
        />
      </div>
      <div className="pokemons-box">{renderPokemons()}</div>
    </div>
  );
};

export default Home;
