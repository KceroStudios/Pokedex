import '../assets/css/controls.css'
import Button from './Button'
import { AiOutlineRedo } from "react-icons/ai"

const Controls = ({ rowButtonOnClick, btnZoomInOnClick, btnZoomoutOnClick }) => {
    return(
        <div className='controls_container'>
            <Button btnClass={'row_button'} btnOnClick={ rowButtonOnClick }>
                <AiOutlineRedo />
            </Button>

            <div className='button_group'>
                <Button btnClass={'button_h bg_red'} btnOnClick={ btnZoomInOnClick }> - </Button>
                <Button btnClass={'button_h bg_green'} btnOnClick={ btnZoomoutOnClick }> + </Button>
                <div className='panel'></div>
            </div>

            <div className='button_group_cross'> 
                <button className='button_cross button_cross_t'></button>
                <button className='button_cross button_cross_l'></button>
                <button className='button_cross button_cross_r'></button>
                <button className='button_cross button_cross_b'></button>
            </div>
        </div>
    )
}

export default Controls