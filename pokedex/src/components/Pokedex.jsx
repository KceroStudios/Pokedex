import React from "react"
import '../assets/css/pokedex.css'

const Pokedex = ({children}) => {
    return(
        <div className="pokedex_container">
            <div className="pokedex">
                {children}
            </div>
        </div>
    )
}

export default Pokedex