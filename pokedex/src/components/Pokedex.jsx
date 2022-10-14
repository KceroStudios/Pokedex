import '../assets/css/pokedex.css'
import React, { useState } from "react";
import { searchPokemon } from "../Api";
import PokedexBody from '../components/PokedexBody'
import PoquedexCover from '../components/PokedexCover'
import CenterBar from '../components/CenterBar'

const Pokedex = ( ) => {
    const [ search, setSearch ] = useState ( '1' )
    const [ pokemon, setPokemon ] = useState ( '' )

    const onChange = ( e ) =>{
        setSearch( e.target.value )
    }
    
    const onClick = async ( e ) =>{
        const data = await searchPokemon( search )
        setPokemon(data) 
        console.log(data) 
        console.log(data.abilities[0].ability.name) 
    }

    const weightPokemon = pokemon &&  pokemon.weight
    const weightPokemon2 = weightPokemon == 0 ? 'Bienvenidos' : weightPokemon

    const namePokemon = pokemon &&  pokemon.abilities[0].ability.name

    const imgPokemon = pokemon &&  pokemon.sprites.front_default
    const imgPokemon2 = imgPokemon == false ? 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png' : pokemon &&  pokemon.sprites.front_default


    return(
        <div className="pokedex_container">
            <nav>
                <img alt="PokéAPI" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" className="logo" width={200} />
                <div className="buscador">
                    <input placeholder="Buscar Pokemon " onChange={onChange} />
                    <button onClick = { onClick }> Buscar </button>
                </div>
            </nav>

            <div className='pokedex_machine'>
                <PokedexBody imgPokemon={ imgPokemon2 } />
                <CenterBar />
                <PoquedexCover name={ namePokemon } weight={ weightPokemon2 } />
            </div>
        </div>
    )
}

export default Pokedex