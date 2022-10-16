import '../assets/css/pokedex_body.css'
import Camera from './Camera'
import Led from './Led'
import Separator from './Separator'
import Screen from './Screen'
import Controls from './Controls'

const PokedexBody = ({imgPokemon, imgClass, rowButtonOnClick, btnZoomInOnClick, btnZoomoutOnClick, progressWidth, xpPoquemon ,btnNextPokemon, btnBackPokemon}) => {
    return(
        <div className='pokedex_body'>
            <div className='pokedex_body_container'>
                <div className='pokedex_body_led_group'>
                    <Camera />
                    <div className='pokedex_body_led_group_2'>
                        <Led color='led_red'/>
                        <Led color='led_yellow'/>
                        <Led color='led_green'/>
                    </div>
                </div>
                <Separator clase={'separator_1'}/>
                <div className='pokedex_body_sub_container'>
                    <div className='pokedex_body_sub_container_top'>
                        <Separator clase={'separator_2'}/>
                        <div className='container_screen_controls'>
                            <Screen imgPokemon={ imgPokemon } imgClass={ imgClass }></Screen>
                            <Controls 
                                rowButtonOnClick={ rowButtonOnClick }
                                btnZoomInOnClick={ btnZoomInOnClick }
                                btnZoomoutOnClick={ btnZoomoutOnClick }
                                progressWidth={ progressWidth }
                                xpPoquemon={ xpPoquemon }
                                btnNextPokemon={btnNextPokemon }
                                btnBackPokemon={ btnBackPokemon }
                            />
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default PokedexBody