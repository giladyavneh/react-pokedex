import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from "./SearchBox"
import PokedexBody from "./PokedexBody"

function App() {
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"
  const [currentPokemon, setCurrent] = useState({})
  const [evolution, setEvolution] = useState("")

  const getPokemon = (input) => {

    if (input) {
      fetch(`${BASE_URL}${input}/`).then(res => {
        if (res.ok) {
          res.json().then(res => {
            setEvolution(res)
            let {
              name,
              height,
              weight,
              sprites,
              types
            } = res;
            let front = sprites.front_default
            let back = sprites.back_default
            let type = types.map(obj => obj.type)
            setCurrent({
              name,
              height,
              weight,
              front,
              back,
              type
            })
          })
        } else {
          let front = "https://freestencilgallery.com/wp-content/uploads/2017/04/Pokemon-Psyduck-Silhouette-Stencil-thumb.jpg"
          let name = `Oops, we didn't find this pokemon`
          setCurrent({
            name,
            front,
            back: front
          })
          setEvolution("")
        }
      }).catch(e=>{
        let name="Oops, There was something wrong with our connection"
        let front="https://pm1.narvii.com/7234/01d92d685293d79b609b443da370c4ebad6ee280r1-800-450v2_uhq.jpg"
        setCurrent({name,front,back:front})
      })
    }
  }
  
  return (
    <div className="App">
      <SearchBox search={(input)=>getPokemon(input)}/>
      <PokedexBody name={currentPokemon.name} height={currentPokemon.height}
      weight={currentPokemon.weight} front={currentPokemon.front}
      back={currentPokemon.back} type={currentPokemon.type}
      evolution={evolution} search={(name)=>getPokemon(name)}/>
      <div className="bottom"></div>
    </div>
  );
}

export default App;
