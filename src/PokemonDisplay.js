import React from "react";
import "./PokemonDisplay.css";
import TypeMenu from "./TypeMenu"
function PokemonDisplay(props){
    return (
        <div className="pokemonDisplay">
            <h2>{props.name}</h2>
            <h4>{props.height?`Height: ${props.height}`:""}</h4>
            <h4>{props.weight?`Weight: ${props.weight}`:""}</h4>
            <div className="typeBox">
                <TypeMenu types={props.type} search={(name)=>props.search(name)}/>
            </div>
        </div>
    )
}

export default PokemonDisplay;