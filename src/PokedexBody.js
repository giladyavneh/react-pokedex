import React, { useState, useEffect } from "react";
import PokemonDisplay from "./PokemonDisplay"
import "./PokedexBody.css"
import EvolutionBox from "./EvolutionBox";
function PokedexBody(props){
    const [direction,setDirection]=useState(props.front);
    useEffect(()=>{setDirection(props.front)},[props.front])
    const imgSize=`${75+props.height/60*25}%`
    const imgStyle={height:imgSize}
    return (
        <div className="main">
            <div className="topDisplay">
                <div className="imgBox">
                <img onMouseEnter={()=>setDirection(props.back)} 
                onMouseLeave={()=>setDirection(props.front)} 
                src={direction}
                style={imgStyle}/>
                </div>
                <PokemonDisplay 
                name={props.name} weight={props.weight} 
                height={props.height} type={props.type}
                search={(name)=>props.search(name)}/>
            </div>
            <EvolutionBox evolution={props.evolution} search={(name)=>props.search(name)}/>
        </div>
    )
}



export default PokedexBody;