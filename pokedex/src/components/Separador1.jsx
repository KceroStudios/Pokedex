import '../assets/css/separador.css'
const Separador1 = ({clase}) =>{
    const clase_dinamica = clase
    return(
        <div className={clase_dinamica}>
            <div className='separador separador_1_1'></div>
            <div className='separador separador_1_2'></div>
            <div className='separador separador_1_3'></div>
        </div>
    )
}

export default Separador1