import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './componentes/header/Header'
import { Home } from './componentes/visualizacionCupones/Home'
import { Registro } from './componentes/usuarios/Registro'
import { IniciarSesion } from './componentes/usuarios/Iniciarsesion'
import { IniciarSesionEmpleados } from './componentes/empleados/IniciarSesionEmpleados'
import { RegistroEmpleados } from './componentes/empleados/RegistroEmpleados'
import { CuponesPublicos } from './componentes/visualizacionCupones/CuponesPublicos'
import { CuponesPrivados } from './componentes/visualizacionCupones/CuponesPrivados'
import { MiPerfil } from './componentes/usuarios/MiPerfil'
import AuthProvider from './context/AuthContext'
import ReclamarCupones from './componentes/empleados/ReclamarCupones'

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Colocar las rutas acá */}

          <Route path='/' element={<Header />}>
            <Route index element={<CuponesPublicos />} />
            <Route path='misCupones' element={<CuponesPrivados />} />

            <Route path="cliente">
              <Route path="registro" element={<Registro />} />
              <Route path="login" element={<IniciarSesion />} />
            </Route>

            <Route path="empleado">
              <Route path="registro" element={<RegistroEmpleados />} />
              <Route path="login" element={<IniciarSesionEmpleados />} />
              <Route path="canjear" element={<ReclamarCupones />} />
              <Route />
            </Route>
          </Route>

          <Route path='perfil' element={<MiPerfil />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App