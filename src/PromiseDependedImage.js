import React, { useState, useEffect } from "react";

function PromiseDependedImage(props){
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"
    const [url,setUrl]=useState("")
    useEffect(()=>fetchUrl(props.name),[props.name])
    const fetchUrl=(name)=>{
        fetch(`${BASE_URL}${name}`).then(res=>res.json()).then(res=>setUrl(res.sprites.front_default))
    }
    return <img src={url} onClick={()=>props.onClick()} style={props.style}></img>
}

export default PromiseDependedImage;