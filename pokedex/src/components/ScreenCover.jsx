import '../assets/css/screen_cover.css'

const ScreenCover = ({name, weight }) => {
    return(
        <div className='screen_cover'>
            <i> { name }</i>
            <i> { weight }</i>
        </div>
    )
}

export default ScreenCover