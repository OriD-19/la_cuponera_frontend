import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './componentesComunes/Header'
import { Home } from './VisualizacionCupones/Home'
import { Cupones } from './VisualizacionCupones/Cupones'
import { Registro } from './Registro/Registro'
import { IniciarSesion } from './Iniciosesion/Iniciarsesion'
import { MostrarMarcas } from './VisualizacionCupones/Marca'

const App = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            {/* Colocar las rutas acá */}
            
            <Route path='/' element={<Home/>}/> {/*Por el momento va a abrir la pantalla de los cupones para el user si no tiene almos mas especifico en la ruta */}
            <Route path='cupones' element={<Cupones/>}/> {/* Si le pongo cupones ya me va a llevar a la pagina de los cupones*/}
            <Route path="registro" element={<Registro />} />
            <Route path="inicio" element={<IniciarSesion />} />
            <Route path='marcas' element={<MostrarMarcas/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App