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
import CuponAdquirido from './componentes/visualizacionCupones/CuponAdquirido'
import CouponDetails from './componentes/visualizacionCupones/CouponDetails'
import PasarelaPago from './componentes/visualizacionCupones/PasarelaPago'
import CategoryContext from './context/CategoryContext'

const App = () => {
  return (
    <AuthProvider>
      <CategoryContext>
        <BrowserRouter>
          <Routes>
            {/* Colocar las rutas acá */}

            <Route path='/' element={<Header />}>
              <Route index element={<CuponesPublicos />} />
              <Route path='misCupones' element={<CuponesPrivados />} />

              <Route path="cliente">
                <Route path="registro" element={<Registro />} />
                <Route path="login" element={<IniciarSesion />} />
                <Route path="perfil" element={<MiPerfil />} />
              </Route>

              <Route path="empleado">
                <Route path="registro" element={<RegistroEmpleados />} />
                <Route path="login" element={<IniciarSesionEmpleados />} />
                <Route path="canjear" element={<ReclamarCupones />} />
                <Route />
              </Route>

              <Route path="detalleCupon">
                <Route path=":couponId" element={<CouponDetails />} />
                <Route path=":couponId/purchase" element={<PasarelaPago />} />
                <Route path="compra/:couponId" element={<CuponAdquirido isPublic={true} />} />
              </Route>

              <Route path='/detalleOferta'>
                <Route path=':couponId' element={<CuponAdquirido isPublic={false} />} />
              </Route>
            </Route>


          </Routes>
        </BrowserRouter>
      </CategoryContext>
    </AuthProvider>
  )
}

export default App;