import Pokemons from "../components/Pokemons";

const Home = ({ pokemons }) => {
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
