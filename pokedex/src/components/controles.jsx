import '../assets/css/controles.css'
const Controles = () => {
    return(
        <div className='controles_contenedor'>
            <button className='boton_redondo'></button>
            <div className='boton_group'>
                <button className='boton_horizontal'></button>
                <button className='boton_horizontal boton_horizontal_verde '></button>
                <div className='panel'></div>
            </div>

            <div className='boton_group_cruzeta'> 
                <button className='boton_cruz boton_cruz_t'></button>
                <button className='boton_cruz boton_cruz_l'></button>
                <button className='boton_cruz boton_cruz_r'></button>
                <button className='boton_cruz boton_cruz_b'></button>
            </div>
        </div>
    )
}

export default Controles