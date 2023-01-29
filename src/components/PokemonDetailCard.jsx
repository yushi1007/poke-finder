import { useState } from "react";
import { useEffect } from "react";
import { fetchPokemonDescription } from "../api/Api";
import { formatId, getTotalStat, convertStatName, displayUnit } from "../util/util";
import PokemonTypes from "./PokemonTypes";
const PokemonDetailCard = ({ data }) => {
    const [desc, setDesc] = useState();

    const renderAbilities = (abilities) =>{
        if (!abilities) return;
        return abilities.map((ability, index)=>{
            return (
                <div className="unitData" key={index}>
                    <p>{ability?.ability?.name}</p>
                </div>
            )
        })
    }

    useEffect(()=>{
        console.log(data)
        fetchPokemonDescription(data?.species?.url)
        .then(res=>{
            let descText = res?.flavor_text_entries[0]?.flavor_text;
            setDesc(descText ? descText : null);
        })
    },[data])

    const renderUnitData = (subHeader, data) =>{
        return(
            <div className="unitData">
                <h2>{subHeader}</h2>
                <p>{data + " " + displayUnit(subHeader)}</p>
            </div>
        )
    }

    const renderStats = () =>{
        return data?.stats?.map((stat,index)=>{
            return(
                <div className={`stat ${convertStatName(stat?.stat?.name)}`} key={index}>
                    <div className="name">
                        <div>{convertStatName(stat?.stat?.name)}</div>
                    </div>
                    <div className="num">{stat?.base_stat}</div>
                </div>
            )
        })
    }


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

                    <div className="desc">
                        <h3>POKEDEX ENTRY</h3>
                        <p>{desc}</p>
                    </div>
                    <hr/>
                    <h2>Abilities</h2>
                    <div className="abilities flex">
                        {renderAbilities(data?.abilities)}
                    </div>
                    <div className="flex">
                        {renderUnitData('Height',data?.height)}
                        {renderUnitData('Weight',data?.weight)}
                    </div>
                    <h2 className="statsHeader">STATS</h2>
                    <div className="stats flex">
                        {renderStats()}
                        <div className="stat TOT">
                            <div className="name"><div>TOT</div></div>
                            <div className="num">{getTotalStat(data?.stats)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetailCard;
