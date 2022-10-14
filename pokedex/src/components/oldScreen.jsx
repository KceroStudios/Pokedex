import { useEffect, useState } from "react"
import '../assets/css/screen.css'
import Led from './Led'

const Screen = () => {
    const [ pokemon, setPokemon ] = useState([])
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=1&offset=1'

    const pokemonFetch = ( url ) => {
        fetch( url )
            .then(response => response.json())
            .then(data => setPokemon(data.results))
    }
    useEffect(() => {
        pokemonFetch( apiUrl )
    }, [])

    return(
        <div className='screen_container'>
            <div className='screen_container_2'>
                <div className='screen_led_group'>
                    <Led color={'led_red'}/>
                    <Led color={'led_red'}/>
                </div>
                <div className='screen'>
                    {
                        pokemon.map((item, index) => (
                            <div className="cont" key={ index }>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}  alt={item.name}/>
                                <small>{item.id}{item.count}{item.count}</small>
                                
                                <button className="temp">next</button>
                            </div>
                        ))
                    }
                </div>
                    
                <div className='horm_container'>
                    <Led color={'led_red'}/>
                    <div>
                        ==
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Screen