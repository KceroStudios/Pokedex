import '../assets/css/controls.css'
const Controls = () => {
    return(
        <div className='controls_container'>
            <button className='row_button'></button>
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