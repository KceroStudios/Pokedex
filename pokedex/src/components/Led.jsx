import '../assets/css/led.css'

const Led = ({color}) =>{
    const led_color = `${color} led`
    return(
        <div className= {led_color} >
            <div className='led_brigh'></div>
        </div>
    )
}

export default Led