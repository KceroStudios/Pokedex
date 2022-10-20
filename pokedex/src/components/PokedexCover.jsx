import '../assets/css/pokedex_cover.css'
import Separator from './Separator'
import ScreenCover from './ScreenCover'
import Led from './Led'
import Button from './Button'
import { AiOutlineCloseCircle, AiOutlineArrowLeft,  AiOutlineArrowRight, AiOutlineDoubleLeft, AiOutlineDoubleRight} from "react-icons/ai";

const PoquedexCover = ({ 
    name, 
    attribute, 
    attribute2, 
    btnColoseOnClick, 
    closeClass, 
    prevMoves, 
    nextMoves, 
    listaPokemon,
    btnSinglePokemonOnClick,
    paginationOnClick,
    paginationBackOnClick,
    attribute3,
    attributePokemon4,
    hiddenClass
 }) =>{
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
                            <Button btnClass={ 'button_h' } btnOnClick={prevMoves}> <AiOutlineArrowLeft /> </Button>
                            <Button btnClass={ 'button_h' } btnOnClick={nextMoves}> <AiOutlineArrowRight /> </Button>   
                        </div>
                        <div className='button_group'>
                            {listaPokemon.map(pokemon => <Button btnOnClick={()=>btnSinglePokemonOnClick(pokemon.id)} key={pokemon.id} btnClass={ 'button_square' }>{pokemon.id}</Button>)}
                        </div>
                        <div className='button_group_3'>
                            <Button btnOnClick={paginationBackOnClick} btnClass={'button_square'}>
                                <AiOutlineDoubleLeft/>
                            </Button>
                            <Button btnOnClick={paginationOnClick} btnClass={'button_square'}>
                                <AiOutlineDoubleRight/>
                            </Button>
                            <Led color='led_yellow'/>
                        </div>
                        <div className='screen_group'>
                            <ScreenCover  
                                attribute={ attribute3 }
                                screenCoverClass={ 'screen_cover screen_cover_3' }
                            />
                            <ScreenCover  
                                attribute={ attributePokemon4 }
                                screenCoverClass={ 'screen_cover screen_cover_3' }
                            />
                        </div>   
                        <Button btnClass={'close'} btnOnClick={ btnColoseOnClick } > <small>Cerrar: </small> <AiOutlineCloseCircle/></Button>
                    </div>
                    
                </div>                          
            </div>

            <div className={`cover_cover ${ hiddenClass }`}></div>
            
        </div>
    )
}

export default PoquedexCover