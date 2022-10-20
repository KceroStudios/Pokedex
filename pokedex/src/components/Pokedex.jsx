import '../assets/css/pokedex.css'
import React, { useState, useEffect } from "react";
import { searchPokemon, getPokemons, getPokemonData } from "../Api";
import PokedexBody from '../components/PokedexBody'
import PoquedexCover from '../components/PokedexCover'
import CenterBar from '../components/CenterBar'
import { AiOutlineSearch } from "react-icons/ai";

const Pokedex = ( ) => {
    const [ search, setSearch ] = useState ( '1' )
    const [ pokemon, setPokemon ] = useState ( '' )
    const [ rotarImagen, setRotarImagen ] = useState ( '' )
    const [ imgClass, setImgClass] = useState ( '' )
    const [ hiddenClass, setHiddenClass ] = useState ( '' )
    const [ progressWidth, setProgessWidth ] = useState ('1')
    const [ xpPoquemon, setxpPoquemon ] = useState ('000')
    const [ closeClass, setCloseClass ] = useState ('')
    const [ attributePokemon2Increase, setAttributePokemon2Increase] = useState (0)
    const [ listaPokemon, setListaPokemon ] = useState([])
    const [ offset, setOffset ] = useState( 0 )

console.log(pokemon)
    const fetchPokemons = async (e) =>{
        try{
            const data = await getPokemons( e )
            const promises = data.results.map(async (listaPokemon) => {
                return await getPokemonData(listaPokemon.url)
            })
            const results = await Promise.all(promises)
            setListaPokemon(results)
        } catch(err){

        }
    }

    useEffect(()=>{
        fetchPokemons()
    }, [])

    const onChange = ( e ) =>{
        setSearch( e.target.value == 0 || e.target.value > 898 ? 1 : e.target.value)
    }
    
    const onClick = async ( e ) =>{
        const data = await searchPokemon( search )
        setPokemon(data) 
        setxpPoquemon(data.base_experience)
        setProgessWidth(data.base_experience / 3) 
        setAttributePokemon2Increase( 0 ) 
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
        const data = await searchPokemon(pokemon.id == 898 || pokemon.id == undefined ? 1 : pokemon.id + 1)
        setxpPoquemon(data.base_experience)
        setProgessWidth(data.base_experience / 3)
        setAttributePokemon2Increase( 0 )
        setPokemon(data) 
        console.log(pokemon)
    }

    const btnBackPokemon = async ( e ) =>{
        const data = await searchPokemon(pokemon.id == 1 || pokemon.id == undefined ? 898 : pokemon.id - 1) 
        setxpPoquemon(data.base_experience)
        setProgessWidth(data.base_experience / 3)
        setAttributePokemon2Increase( 0 )
        setPokemon(data)
    }

    const btnColoseOnClick = ( e ) =>{  
        setCloseClass( closeClass == 'pokedex_cover_close' ? '' :'pokedex_cover_close' )
        setHiddenClass( hiddenClass == 'hidden' ? '' : 'hidden' )  
    }

    const nextMoves = ( e ) =>{  
        setAttributePokemon2Increase(attributePokemon2Increase == pokemon.moves.length - 1 ? 0 :  attributePokemon2Increase + 1)
    }

    const prevMoves = ( e ) =>{  
        setAttributePokemon2Increase(attributePokemon2Increase == 0 ? 0 : attributePokemon2Increase - 1)
    }

    const btnSinglePokemonOnClick = async ( e ) =>{
        const data = await searchPokemon( e )
        // const data = listaPokemon[e - 1] 
        setxpPoquemon(data.base_experience)
        setProgessWidth(data.base_experience / 3)
        setAttributePokemon2Increase( 0 )
        setPokemon(data) 
    }

    const paginationOnClick = async () =>{
        const page = ( offset == 880 ? 0 :offset + 10 )
        setOffset( page ) 
        fetchPokemons( page )   
    }

    const paginationBackOnClick = async () =>{
        const page = ( offset == 0 ? 880 : offset - 10 )
        setOffset( page )
        fetchPokemons( page )   
    }

  
    
    
    const namePokemon = pokemon &&  pokemon.name
    const attributePokemon = pokemon &&  'Type : : : : ' + pokemon.types[0].type.name
    const imgPokemon = rotarImagen == 2 ? pokemon &&  pokemon.sprites.back_default : pokemon &&  pokemon.sprites.front_default
    const attributePokemon2 = pokemon &&  'Move nº' + (attributePokemon2Increase + 1) + ' : : : ' + pokemon.moves[attributePokemon2Increase].move.name
    const attributePokemon3 = pokemon &&  'weight : ' + pokemon.weight
    const attributePokemon4 = pokemon &&  'height : ' + pokemon.height

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
                        attribute3={ attributePokemon3 } 
                        attributePokemon4={ attributePokemon4 }
                        btnColoseOnClick={ btnColoseOnClick }
                        closeClass={ closeClass }
                        prevMoves={ prevMoves }
                        nextMoves={ nextMoves }
                        listaPokemon={ listaPokemon }
                        btnSinglePokemonOnClick={ btnSinglePokemonOnClick }
                        paginationOnClick={ paginationOnClick }
                        paginationBackOnClick={ paginationBackOnClick }
                        hiddenClass={ hiddenClass }
                    />
                </div>     
            </div>
        </div>
    )
}

export default Pokedex