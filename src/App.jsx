import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './componentesComunes/Header'
import { Home } from './VisualizacionCupones/Home'
import { Registro } from './Registro_cliente/Registro'
import { IniciarSesion } from './Iniciosesion_cliente/Iniciarsesion'
import { IniciarSesion2 } from './Iniciosesion_empleado/Iniciarsesion2'
import { Registro2 } from './Registro_empleado/Registro2'
import { CuponesPublicos } from './VisualizacionCupones/CuponesPublicos'
import { CuponesPrivados } from './VisualizacionCupones/CuponesPrivados'

const App = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            {/* Colocar las rutas acá */}
            
            <Route path='/' element={<Home/>}/> {/*Por el momento va a abrir la pantalla de los cupones para el user si no tiene almos mas especifico en la ruta */}
            <Route path='cuponesPublicos' element={<CuponesPublicos/>}/> {/* Si le pongo cupones ya me va a llevar a la pagina de los cupones*/}
            <Route path='cuponesPrivados' element={<CuponesPrivados/>}/> {/* Si le pongo cupones ya me va a llevar a la pagina de los cupones*/}
            <Route path="registro" element={<Registro />} />
            <Route path="inicio" element={<IniciarSesion />} />
            <Route path="registro2" element={<Registro2 />} />
            <Route path="inicio2" element={<IniciarSesion2 />} />

        </Routes>
    </BrowserRouter>
  )
}

export default App