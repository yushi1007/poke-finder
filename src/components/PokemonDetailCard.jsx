import { formatId } from "../util/util";
import PokemonTypes from "./PokemonTypes";
const PokemonDetailCard = ({ data }) => {
    return (
        <div id="pokemonDetailCard">
            <div className="body">
                <div className="info">
                    <img src={data?.sprites?.other["official-artwork"].front_default} alt={data?.name} />
                    <b>{"#" + formatId(data?.id)}</b>
                    <h1>{data?.name.toUpperCase()}</h1>
                    <div className="type">
                        <PokemonTypes pokemonTypes={data?.types} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetailCard;
