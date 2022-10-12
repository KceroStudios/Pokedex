import React from "react"
import '../assets/css/pokedex.css'

const Pokedex = ({children}) => {
    return(
        <div className="pokedex">
            {children}
        </div>
    )
}

export default Pokedex