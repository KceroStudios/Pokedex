import '../assets/css/button.css'

const Button = ({ children, btnClass, btnOnClick }) => {
    return (
        <button className= {  `${btnClass} global_buttom`}  onClick={ btnOnClick }>{ children }</button>
    )
}

export default Button