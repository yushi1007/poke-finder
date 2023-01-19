const PokemonSubDetail = ({data}) =>{
    const renderMoves = ()=>{
        return data?.moves.map(move=>{
            return(
            <div className="move">
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