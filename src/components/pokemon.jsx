import PokemonTypes from "./PokemonTypes";

const Pokemon = ({
  pokemonId,
  pokemonStyleClassName,
  pokemonImage,
  pokemonName,
  pokemonTypes,
  pokemonHeight,
  pokemonWeight,
}) => {
  return (
    <div className="pokemon">
      <p className={`pokemon-id-back ${pokemonStyleClassName}`}>#{pokemonId}</p>
      <div className="pokemon-image">
        <img src={pokemonImage} alt={pokemonName} />
      </div>
      <div className="pokemon-content">
        <div className="pokemon-body">
          <p className="pokemon-id">#{pokemonId}</p>
          <h2 className="pokemon-name">{pokemonName}</h2>
        </div>
        <div className="pokemon-type">
          <PokemonTypes pokemonTypes={pokemonTypes} />
        </div>
        <div className="pokemon-stats">
          <p className="stat">{pokemonHeight}m</p>
          <p className="stat">{pokemonWeight}kg</p>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
