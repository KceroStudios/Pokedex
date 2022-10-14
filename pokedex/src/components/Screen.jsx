import React from 'react'
import '../assets/css/screen.css'
import Led from './Led'

const Screen = ({imgPokemon}) => {
    return(
        <div className='screen_container'>
            <div className='screen_container_2'>
                <div className='screen_led_group'>
                    <Led color={'led_red'}/>
                    <Led color={'led_red'}/>
                </div>
                <div className='screen'>
                    <img src={imgPokemon} alt="no found" />
                    
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