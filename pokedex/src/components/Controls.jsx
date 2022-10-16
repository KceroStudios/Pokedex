import '../assets/css/controls.css'
import { AiOutlineRedo } from "react-icons/ai"
import Button from './Button'
import ScreenMin from './ScreenMini'

const Controls = ({ rowButtonOnClick, btnZoomInOnClick, btnZoomoutOnClick, progressWidth, xpPoquemon, btnNextPokemon,btnBackPokemon }) => {
    return(
        <div className='controls_container'>
            <Button btnClass={'row_button'} btnOnClick={ rowButtonOnClick }>
                <AiOutlineRedo />
            </Button>

            <div className='button_group'>
                <Button btnClass={'button_h bg_red'} btnOnClick={ btnZoomInOnClick }> - </Button>
                <Button btnClass={'button_h bg_green'} btnOnClick={ btnZoomoutOnClick }> + </Button>
                <ScreenMin 
                    progressWidth={ progressWidth }
                    xpPoquemon={ xpPoquemon }
                 />
            </div>

            <div className='button_group_cross'> 
                <Button btnClass={ 'button_cross button_cross_t' } btnOnClick={ btnNextPokemon }>*</Button>
                <Button btnClass={ 'button_cross button_cross_l' } btnOnClick={ btnBackPokemon }>*</Button>
                <Button btnClass={ 'button_cross button_cross_r' } btnOnClick={ btnNextPokemon}>*</Button>
                <Button btnClass={ 'button_cross button_cross_b' } btnOnClick={ btnBackPokemon }>*</Button>
            </div>
        </div>
    )
}

export default Controls