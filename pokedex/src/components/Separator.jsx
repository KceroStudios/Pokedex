import '../assets/css/separator.css'
const Separator = ({clase}) =>{
    const clase_dinamica = clase
    return(
        <div className={clase_dinamica}>
            <div className='separator separator_1_1'></div>
            <div className='separator separator_1_2'></div>
            <div className='separator separator_1_3'></div>
        </div>
    )
}

export default Separator