import React, { useEffect, useState } from "react";
import "./EvolutionBox.css"
import PromiseDependedImage from "./PromiseDependedImage";
function EvolutionBox(props){
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"
    const [tree,setTree]= useState([])
    useEffect(()=>{if(props.evolution)renderTree(props.evolution)},[props.evolution])
    
    const getEvolutions=(data)=>fetch(data.species.url).then(res => res.json())
    .then(res => fetch(res.evolution_chain.url)).then(res => res.json()).
    then(res=>res.chain)

    const createEvolutionElements=(chain)=>{
            return (
                <div className="container">
                    <PromiseDependedImage name={chain.species.name}
                     onClick={()=>props.search(chain.species.name)}
                     style={chain.species.name===props.evolution.name?{border:"solid blue"}:{}}/>
                    <div className="under">
                        {chain.evolves_to.map(evolution=>createEvolutionElements(evolution))}
                    </div>
                </div>
            )
    }

    const renderTree=(data)=>{
        getEvolutions(data).then(res=>setTree(createEvolutionElements(res)))
    }



    
    return(
        <div className="evolutionBox">
            {tree}
        </div>
    )
}

export default EvolutionBox;