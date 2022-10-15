import '../assets/css/controls.css'
import Button from './Button'
import { AiOutlineRedo } from "react-icons/ai"

const Controls = ({ rowButtonOnClick }) => {
    return(
        <div className='controls_container'>
            <Button btnClass={'row_button'} btnOnClick={ rowButtonOnClick }>
                <AiOutlineRedo />
            </Button>

            <div className='button_group'>
                <button className='button_h'></button>
                <button className='button_h button_h_green '></button>
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