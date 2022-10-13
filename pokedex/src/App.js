import './App.css'
import React from 'react'
import Pokedex from './components/Pokedex'
import pokedex from './assets/images/pokedex-referencia.jpg'
import CenterBar from './components/CenterBar'
import PokedexBody from './components/PokedexBody'
import PoquedexCover from './components/PokedexCover'


function App() {
  return (  
    <Pokedex>
      <PokedexBody></PokedexBody>
      <CenterBar />
      <PoquedexCover></PoquedexCover>
      <img width={600} src={pokedex} alt="pokedex" />
    </Pokedex>  
  )
}

export default App;
