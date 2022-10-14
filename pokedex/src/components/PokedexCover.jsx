import '../assets/css/pokedex_cover.css'
import Separator from './Separator'
import ScreenCover from './ScreenCover'
import ButtonSquare from './ButtonSquare'
import Led from './Led'

const PoquedexCover = ({name, weight }) =>{
    return(
        <div className='pokedex_cover'>
            <Separator clase={'separator_1'}/>
            <div className='cover_controls'>
                <Separator clase={'separator_2'}/>
                <div className='cover_controls_container'>
                    <ScreenCover name={name} weight={weight} />
                    <div className='button_group'>
                        <ButtonSquare/>
                        <ButtonSquare/>
                        <ButtonSquare/>
                        <ButtonSquare/>
                        <ButtonSquare/>
                        <ButtonSquare/>
                        <ButtonSquare/>
                        <ButtonSquare/>
                        <ButtonSquare/>
                        <ButtonSquare/>
                    </div>
                    <div className='button_group_2'>
                        <button className="button_h button_h_gray "></button>
                        <button className="button_h button_h_gray "></button>
                    </div>
                    <div className='button_group_3'>
                        <ButtonSquare/>
                        <ButtonSquare/>
                        <Led color='led_yellow'/>
                    </div>
                    <div className='button_group_4'>
                        <button className="button_h button_h_gray "></button>
                        <button className="button_h button_h_gray "></button>
                    </div>
                    
                </div>

            </div>                          
        </div>
    )
}

export default PoquedexCover