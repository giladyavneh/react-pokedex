import React from "react";
import "./SearchBox.css";

function SearchBox(props){
    const search=(value)=>{
        console.log(value)
    }
    return(
        <div className="searchBox">
            <div className="topDecos">
                <div className="greenCircle"></div>
                <hr/>
                <div className="greenCircle"></div>
            </div>
            <input/>
            <button onClick={()=>props.search(document.querySelector(".searchBox").querySelector("input").value)}>GO!</button>
        </div>
    )
}

export default SearchBox;