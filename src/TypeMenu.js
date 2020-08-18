import React, { useState, useEffect } from "react";
import "./TypeMenu.css";

function TypeMenu(props){
    const [list,setList]=useState([])
    const [contentStyle,setContentStyle]=useState({})
    useEffect(()=>{setContentStyle({});
    setList([])},[props.types])
const buttons=props.types?
props.types.map(type=><button key={type.name} onClick={()=>searchType(type.name)}>{type.name}</button>)
:"";
const searchType=(type)=>{
    setContentStyle({maxHeight:"100%",transform:"translateY(-90px)"})
    fetch(`https://pokeapi.co/api/v2/type/${type}/`).then(res => res.json())
    .then(res=>setList(res.pokemon.map((pokemon,index)=><li key={index} 
    onClick={()=>props.search(pokemon.pokemon.name)}>{pokemon.pokemon.name}</li>)))
}
    return(
        <div className="typeMenu" style={contentStyle}>
            <div className="buttons">
                {buttons}
            </div>
            <div className="content">
                <ul>{list}</ul>
            </div>
        </div>
    )
}

export default TypeMenu;