import {useDispatch} from "react-redux";
import { freezeBody } from "../util/util";
const PokemonSubDetail = ({data}) =>{
    const dispatch = useDispatch();
    const setAbilityUrl = (url) =>{
        dispatch({ abilityUrl: url ,type: "SET_ABILITY_URL" });
        freezeBody()
    }
    const renderMoves = ()=>{
        return data?.moves.map((move,index)=>{
            return(
            <div className="move" onClick={()=>setAbilityUrl(move?.move?.url)} key={index}>
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