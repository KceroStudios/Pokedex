import '../assets/css/center_bar.css'

const CenterBar = () =>{
    return(
        <div className='bar'>
            <div className='bar_col col1'>
                <div className='brigh'></div>
                <div className='shaddow'></div>
            </div>
            <div className='bar_separador'></div>
            <div className='bar_separador'></div>
            <div className='bar_col col2'>
                <div className='brigh'></div>
                <div className='shaddow'></div>
            </div>
            <div className='bar_separador'></div>
            <div className='bar_separador'></div>
            <div className='bar_col col3'>
                <div className='brigh'></div>
                <div className='shaddow'></div>
            </div>
            <div className='bar_separador'></div>
            <div className='bar_separador end'></div>

        </div>
    )
}

export default CenterBar