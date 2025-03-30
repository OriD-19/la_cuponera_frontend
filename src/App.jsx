import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './componentesComunes/Header'
import { Home } from './VisualizacionCupones/Home'
import { Cupones } from './VisualizacionCupones/Cupones'
import { Registration_customer } from './Customer_registration/Registration'
import { Login_customer } from './Customer_login/Login'
import { Login_employee } from './Employee_login/Login'
import { Registration_employee } from './Employee_registration/Registration'

const App = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            {/* Colocar las rutas acá */}
            
            <Route path='/' element={<Home/>}/> {/*Por el momento va a abrir la pantalla de los cupones para el user si no tiene almos mas especifico en la ruta */}
            <Route path='cupones' element={<Cupones/>}/> {/* Si le pongo cupones ya me va a llevar a la pagina de los cupones*/}
            <Route path="Registration_customer" element={<Registration_customer />} />
            <Route path="Login_customer" element={<Login_customer />} />
            <Route path="Registration_employee" element={<Registration_employee />} />
            <Route path="Login_employee" element={<Login_employee />} />

        </Routes>
    </BrowserRouter>
  )
}

export default App