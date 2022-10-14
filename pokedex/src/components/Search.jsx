import React, { useState } from "react";
import { searchPokemon } from "../Api";

const Search = () => {
    const [ search, setSearch ] = useState ( '' )
    const [ pokemon, setPokemon ] = useState ( '' )

    const onChange = ( e ) =>{
        setSearch( e.target.value )
    }
    
    const onClick = async ( e ) =>{
        const data = await searchPokemon( search )
        setPokemon(data)  
    }

    return (
        <div>
            <input 
                placeholder="Buscar Pokemon "
                onChange={onChange}
            />
            <button onClick = { onClick }> Buscar </button>
            <small>{search}</small>
             
            {pokemon &&
                <div>
                    <div>nombre: { pokemon.name }</div>
                    <div>peso: { pokemon.weight }</div>
                    <div>nombre: { pokemon.name }</div>
                    <img src={pokemon.sprites.front_default}/>  
                    
                </div>
            }


        </div>
    )
}

export default Search