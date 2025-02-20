import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './componentes/header/Header'
import { Home } from './VisualizacionCupones/Home'
import { Registro } from './usuarios/Registro'
import { IniciarSesion } from './usuarios/Iniciarsesion'
import { IniciarSesion2 } from './empleados/Iniciarsesion2'
import { Registro2 } from './empleados/Registro2'
import { CuponesPublicos } from './VisualizacionCupones/CuponesPublicos'
import { CuponesPrivados } from './VisualizacionCupones/CuponesPrivados'
import { MiPerfil } from './usuarios/MiPerfil'
import AuthProvider from './context/AuthContext'

const App = () => {
  return (
    <AuthProvider>
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
            <Route path='perfil' element={<MiPerfil/>}/>

        </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App