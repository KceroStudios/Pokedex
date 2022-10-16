import '../assets/css/screen_cover.css'

const ScreenCover = ({name, attribute }) => {
    return(
        <div className='screen_cover'>
            <h3> { name } </h3>
            <small> { attribute } </small>
        </div>
    )
}

export default ScreenCover