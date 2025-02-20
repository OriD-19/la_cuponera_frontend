import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './componentesComunes/Header'
import { Home } from './VisualizacionCupones/Home'
import { Cupones } from './VisualizacionCupones/Cupones'
import { Registro } from './Registro/Registro'
import { IniciarSesion } from './Iniciosesion/Iniciarsesion'
import { MostrarMarcas } from './VisualizacionCupones/Marca'
import CategoriesList from './VisualizacionCupones/categorias/Categories'



const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cupones' element={<Cupones />} />
        <Route path="registro" element={<Registro />} />
        <Route path="inicio" element={<IniciarSesion />} />
        <Route path='marcas' element={<MostrarMarcas />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App