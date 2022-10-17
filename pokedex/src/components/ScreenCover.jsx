import '../assets/css/screen_cover.css'

const ScreenCover = ({ name, attribute, screenCoverClass }) => {
    return(
        <div className={ screenCoverClass }>
            <h3> { name } </h3>
            <small>{ attribute } </small>
        </div>
    )
}

export default ScreenCover