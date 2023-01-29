import { useEffect, useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import { fetchAbilityDetail } from '../api/Api';

const AbilityDetail = () =>{
    const abilityUrl = useSelector((state) => state.abilityUrl);
    const [abilityData, setAbilityData] = useState();
    const dispatch = useDispatch();

    useEffect(()=>{
        abilityUrl ? getAbilityDetail() : setAbilityData(null);
    },[abilityUrl])

    const getAbilityDetail = () =>{
        fetchAbilityDetail(abilityUrl)
        .then(res=>{
            setAbilityData(res)
        })
    }

    const clearAbilityUrl = () =>{
        dispatch({ type: "CLEAR_ABILITY_URL "})
    }
    return(
        <div id="PokemonDetailPage" className={ `ability ${ abilityData ? 'active' : ''}`}>
            <button onClick={clearAbilityUrl} className="close">Close</button>
        </div>
    )
}

export default AbilityDetail;