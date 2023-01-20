import Pokemons from "../components/Pokemons";
import { filterPokemonsByName } from "../util/util";

const Home = ({ pokemons, searchTerm }) => {
  const renderPokemons = () => {
    return pokemons?.map((pokemon, index) => {
      return <Pokemons key={index} pokemon={pokemon} />;
    });
  };

  return (
    <div id="Home" className="pokemons-box container">
      {renderPokemons()}
    </div>
  );
};

export default Home;
