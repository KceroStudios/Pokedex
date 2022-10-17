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
    const [ closeClass, setCloseClass ] = useState ('')
    const [ attributePokemon2Increase, setAttributePokemon2Increase] = useState (0)
    
    const onChange = ( e ) =>{
        setSearch( e.target.value == 0 || e.target.value > 898 ? 1 : e.target.value)
    }
    
    const onClick = async ( e ) =>{
        const data = await searchPokemon( search )
        setPokemon(data) 
        setxpPoquemon(data.base_experience)
        setProgessWidth(data.base_experience / 3) 
        setAttributePokemon2Increase( 0 )
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
        const data = await searchPokemon( search )
        setSearch (data.id == 898 ? 1 : data.id + 1)
        setPokemon(data) 
        setxpPoquemon(data.base_experience)
        setProgessWidth(data.base_experience / 3)
        setAttributePokemon2Increase( 0 )
        console.log(search)
        console.log(data)
    }

    const btnBackPokemon = async ( e ) =>{
        const data = await searchPokemon(search )
        setSearch (data.id == 1 ? 898 : data.id - 1)
        setPokemon(data) 
        setxpPoquemon(data.base_experience)
        setProgessWidth(data.base_experience / 3)
        setAttributePokemon2Increase( 0 )
        console.log(search)
    }

    const btnColoseOnClick = ( e ) =>{  
        setCloseClass( 'pokedex_cover_close' )  
    }

    const nextMoves = ( e ) =>{  
        setAttributePokemon2Increase(attributePokemon2Increase == pokemon.moves.length - 1 ? 0 :  attributePokemon2Increase + 1)
        console.log(attributePokemon2Increase)
    }

    const prevMoves = ( e ) =>{  
        setAttributePokemon2Increase(attributePokemon2Increase == 0 ? 0 : attributePokemon2Increase - 1)
        console.log(attributePokemon2Increase)
        console.log(pokemon.moves.length)
    }
    
    const namePokemon = pokemon &&  pokemon.name
    const attributePokemon = pokemon &&  'Type : : : : ' + pokemon.types[0].type.name
    const imgPokemon = rotarImagen == 2 ? pokemon &&  pokemon.sprites.back_default : pokemon &&  pokemon.sprites.front_default
    const attributePokemon2 = pokemon &&  'Moves : : : : ' + pokemon.moves[attributePokemon2Increase].move.name

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
                        btnBackPokemon={ btnBackPokemon }
                    />
                    <CenterBar />
                    <PoquedexCover 
                        name={ namePokemon } 
                        attribute={ attributePokemon } 
                        attribute2={ attributePokemon2 } 
                        btnColoseOnClick={ btnColoseOnClick }
                        closeClass={ closeClass }
                        prevMoves={ prevMoves }
                        nextMoves={ nextMoves }
                    />
                </div>
            </div>

        </div>
    )
}

export default Pokedex