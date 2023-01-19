import '../assets/css/screen_min.css'

const ScreenMin = ( {progressWidth, xpPoquemon} ) => {

   
    return (
        <div className='screen_min'>
            <small>XP ...</small>
            <small>{xpPoquemon}</small>
            <div className='progress_bar'>
                <div style={{width:`${progressWidth}%`}} className='progress'> 
                </div>
            </div>
        </div>
    )
}

export default ScreenMin