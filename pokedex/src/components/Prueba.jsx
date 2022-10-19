
import React  from "react"
 
const Prueba =({klk})=>{
console.log(klk)
    return(
        <div>
            {klk.map(lala => <div>{lala.name}</div>)}      
        </div>
    )
}

export default Prueba