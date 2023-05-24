import '../assets/css/camera.css'
const Camera = ({ animation }) => {
    return(
        <div className={`led_group_cam ${ animation }`}>
            <div className='led_group_cam_1'>
                <div className='led_group_cam_2'>
                    <div className='led_group_cam_3'>
                        <div className='led_group_cam_4'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Camera