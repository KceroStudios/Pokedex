import React from "react"
import '../assets/css/contenedor.css'

const Contenedor = ({ children }) => {
    return(
        <div className="container">
            { children }
        </div>
    )
}

export default Contenedor