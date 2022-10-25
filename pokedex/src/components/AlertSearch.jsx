import React from "react";
import '../assets/css/alert_search.css'
import { AiOutlineCloseCircle } from "react-icons/ai";
import Button from "./Button";

const AlertSearch = ({
    wrongPokemon, 
    hiddenWrongSearchClass, 
    alertSearchCloseOnClick
}) => {
    return(
        <div className={`alertSerch ${ hiddenWrongSearchClass }`}>
            
            <div className="alertSearch_container">
                <Button btnOnClick={ alertSearchCloseOnClick } btnClass={'alertSearch_close'}><AiOutlineCloseCircle /></Button>
                <h1>Lo sentimos</h1>
                <p>
                    Al parecer <i>{ wrongPokemon }</i>  no es un nombre de pokemon valido.
                    <br/> Intente con otro nombre o con un numero del <b>1</b> al <b>898</b>
                </p> 
            </div>
        </div>
    )
}

export default AlertSearch