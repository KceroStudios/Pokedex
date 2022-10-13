import '../assets/css/pantalla.css'
import Led from './Led'

const Pantalla = () => {
    return(
        <div className='marco_pantalla'>
            <div className='marco_pantalla_2'>
                <div className='pantalla_led_group'>
                    <Led color={'led_red'}/>
                    <Led color={'led_red'}/>
                </div>
                <div className='pantalla'></div>
                <div className='contenedor_bocina'>
                    <Led color={'led_red'}/>
                    <div>
                        ==
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pantalla