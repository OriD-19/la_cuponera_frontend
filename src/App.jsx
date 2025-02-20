import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './componentesComunes/Header'
import { Home } from './VisualizacionCupones/Home'
import { Cupones } from './VisualizacionCupones/Cupones'

import { MostrarMarcas } from './VisualizacionCupones/Marca'
import { Registro } from './Registro_cliente/Registro'
import { IniciarSesion } from './Iniciosesion_cliente/Iniciarsesion'



const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cupones' element={<Cupones />} />
        <Route path="registro" element={<Registro/>} />
        <Route path="inicio" element={<IniciarSesion />} />
        <Route path='marcas' element={<MostrarMarcas />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App