import '../assets/css/pokedex.css'
import React, { useState } from "react";
import { searchPokemon } from "../Api";
import PokedexBody from '../components/PokedexBody'
import PoquedexCover from '../components/PokedexCover'
import CenterBar from '../components/CenterBar'
import { AiOutlineSearch } from "react-icons/ai";

const Pokedex = ( ) => {
    const [ search, setSearch ] = useState ( '1' )
    const [ pokemon, setPokemon ] = useState ( '' )
    const [ rotarImagen, setRotarImagen ] = useState ( '' )
    const [ imgClass, setImgClass] = useState ( '' )
    const [ progressWidth, setProgessWidth ] = useState ('1')
    const [ xpPoquemon, setxpPoquemon ] = useState ('000')
    const [ nextPokemon, setNextPokemon ] = useState ('1')

    
    

    const onChange = ( e ) =>{
        setSearch( e.target.value )
    }
    
    const onClick = async ( e ) =>{
        const data = await searchPokemon( search )
        setPokemon(data) 
        setxpPoquemon(data.base_experience)
        setProgessWidth(data.base_experience / 3)
        console.log(data) 
        console.log(data.abilities[0].ability.name) 
    }

    const rowButtonOnClick = ( e ) =>{
        setRotarImagen( rotarImagen == 2 ? 1 : 2 )
        setImgClass( imgClass == 'row_left' ? 'row_right' : 'row_left')  
    }

    const btnZoomInOnClick = ( e ) =>{
        setImgClass( 'zoom_in' )  
    }

    const btnZoomoutOnClick = ( e ) =>{
        setImgClass( 'zoom_out' )  
    }


    const btnNextPokemon = async ( e ) =>{
        const data = await searchPokemon( nextPokemon )
        setNextPokemon (data.id + 1)
        setPokemon(data) 
        setxpPoquemon(data.base_experience)
        setProgessWidth(data.base_experience / 3)
        console.log(data) 
        console.log(data.abilities[0].ability.name) 
    }

    

    const weightPokemon = pokemon &&  pokemon.weight
    const weightPokemon2 = weightPokemon == 0 ? 'Bienvenidos' : weightPokemon

    const namePokemon = pokemon &&  pokemon.abilities[0].ability.name
    
    const imgPokemon = rotarImagen == 2 ? pokemon &&  pokemon.sprites.back_default : pokemon &&  pokemon.sprites.front_default

    return(
        <div className="pokedex_container">
            <header className='pokedex_header'>
                <img alt="PokéAPI" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" className="logo" width={200} />
                <div className="buscador">
                    <input placeholder="Buscar Pokemon " onChange={onChange} />
                    <button onClick = { onClick }> <AiOutlineSearch /> </button>
                </div>
            </header>
            <div className='dexter'>
                <div className='pokedex_machine'>
                    <PokedexBody 
                        imgClass={ imgClass } 
                        imgPokemon={ imgPokemon.length == 0 ? 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png' : imgPokemon } 
                        rowButtonOnClick={ rowButtonOnClick } 
                        btnZoomInOnClick ={ btnZoomInOnClick }  
                        btnZoomoutOnClick={ btnZoomoutOnClick }
                        progressWidth={ progressWidth }
                        xpPoquemon={ xpPoquemon }
                        btnNextPokemon={ btnNextPokemon }
                    />
                    <CenterBar />
                    <PoquedexCover name={ namePokemon } weight={ weightPokemon2 } />
                </div>
            </div>

        </div>
    )
}

export default Pokedex