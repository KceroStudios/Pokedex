import React from 'react'
import './App.css'
import Pokedex from './components/Pokedex'
import pokedex from './assets/images/pokedex-referencia.jpg'
import Contenedor from './components/Contenedor'
import Camera from './components/Camera'
import Led from './components/Led'
import Separador1 from './components/Separador1'
import Visagra from './components/Visagra'


function App() {
  return (
    <div className="App">   
      <Contenedor>
        <Pokedex>
          <div className='pokedex_cuerpo'>
            <div className='pokedex_cuerpo_contenedor'>
              <div className='led_group'>
                <Camera />
                <div className='led_group_led'>
                  <Led color='led_red'/>
                  <Led color='led_yellow'/>
                  <Led color='led_green'/>
                </div>
              </div>

              <Separador1 clase={'separador_1'}/>

              <div className='pokedex_cuerpo_sub_contenedor'>
                <div className='pokedex_cuerpo_sub_contenedor_col_1'>
                  <Separador1 clase={'separador_2'}/>
                  <div className='contenedor_pantalla_controles'>
                    contenido
                    <div>Pantalla</div>
                    <div>Controles</div>
                  </div>
                </div>

                <Visagra />

              </div>

              
            </div>
          </div>
          <div>000000000000000000002</div>
          </Pokedex>  
          <img width={600} src={pokedex} alt="pokedex" />
        </Contenedor>
    </div>
  )
}

export default App;
