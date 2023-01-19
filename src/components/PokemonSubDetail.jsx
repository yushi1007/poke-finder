import { useState } from 'react'
import { fetchAbilityDetail } from '../api/Api'
const PokemonSubDetail = ({data}) =>{
    const [abilityData, setAbilityData] = useState();
    const getAbilityDetail = (url) =>{
        fetchAbilityDetail(url)
        .then(res=>{
            setAbilityData(res)
        })
    }
    const renderMoves = ()=>{
        return data?.moves.map((move,index)=>{
            return(
            <div className="move" onClick={()=>getAbilityDetail(move?.move?.url)} key={index}>
                <p>{move?.move?.name}</p>
            </div>
            )
        })
    }

    return(
        <div id="subDetailPanel">
            {renderMoves()}
        </div>
    )
}

export default PokemonSubDetail;