import React from "react";
import Loader from "../components/Loader";
import Pokemons from "../components/Pokemons";
import Filter from "../container/Filter";

const Home = ({
  pokemons,
  handleTypeFilter,
  filterTerm,
  setFilterTerm,
  loading,
}) => {
  return (
    <div id="Home" className="pokemons-container container">
      <div className="filter-section">
        <Filter
          handleTypeFilter={handleTypeFilter}
          filterTerm={filterTerm}
          setFilterTerm={setFilterTerm}
        />
      </div>
      {loading ? (
        <div className="loading">
          <Loader />
        </div>
      ) : (
        <div className="pokemons-box">
          <Pokemons pokemons={pokemons} />
        </div>
      )}
    </div>
  );
};

export default Home;
