import '../assets/css/pokedex_cover.css'
import Separator from './Separator'
import ScreenCover from './ScreenCover'
import ButtonSquare from './ButtonSquare'
import Led from './Led'
import Button from './Button'
import { AiOutlineArrowLeft,  AiOutlineArrowRight} from "react-icons/ai";

const PoquedexCover = ({ name, attribute, attribute2, btnColoseOnClick, closeClass, prevMoves, nextMoves }) =>{
    return(
        <div className={` ${ closeClass } pokedex_cover_container`}>
            <div className='pokedex_cover_separador'></div>
            <div className='pokedex_cover'>
                <Separator clase={'separator_1'}/>
                <div className='cover_controls'>
                    <Separator clase={'separator_2'}/>
                    <div className='cover_controls_container'>
                        <ScreenCover 
                            name={ name } 
                            attribute={ attribute }
                            screenCoverClass={ 'screen_cover screen_cover_1' }
                        />
                        <ScreenCover  
                            attribute={ attribute2 }
                            screenCoverClass={ 'screen_cover screen_cover_2' }
                        />
                        <div className='button_group_2'>
                            <Button btnClass={'button_h'} btnOnClick={prevMoves}> <AiOutlineArrowLeft /> </Button>
                            <Button btnClass={'button_h'} btnOnClick={nextMoves}> <AiOutlineArrowRight /> </Button>   
                        </div>
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
                        <div className='button_group_3'>
                            <ButtonSquare/>
                            <ButtonSquare/>
                            <Led color='led_yellow'/>
                        </div>
                        <div className='button_group_4'>
                            <button className="button_h button_h_gray ">
                            </button>
                            <button className="button_h button_h_gray "></button>
                        </div>

                       
                    </div>
                    <Button
                        btnOnClick={ btnColoseOnClick } 
                    />
                </div>                          
            </div>
            
        </div>
    )
}

export default PoquedexCover