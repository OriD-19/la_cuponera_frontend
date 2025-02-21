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
import CuponAdquirido from './componentes/visualizacionCupones/CuponAdquirido'
import CouponDetails from './componentes/visualizacionCupones/CouponDetails'
import PasarelaPago from './componentes/visualizacionCupones/PasarelaPago'


const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
            {/* Colocar las rutas acá */}
            
            <Route path='/' element={<Home/>}/> {/*Por el momento va a abrir la pantalla de los cupones para el user si no tiene almos mas especifico en la ruta */}
            <Route path='cuponesPublicos' element={<CuponesPublicos/>}/> {/* Si le pongo cupones ya me va a llevar a la pagina de los cupones publicos habilitados para todos*/}
            <Route path='cuponesPrivados' element={<CuponesPrivados/>}/> {/* Si le pongo cupones ya me va a llevar a la pagina de los cupones privados del user*/}
            <Route path="registro" element={<Registro />} />
            <Route path="login" element={<IniciarSesion />} />
            <Route path="registro_empleados" element={<RegistroEmpleados />} />
            <Route path="login_empleados" element={<IniciarSesionEmpleados />} />
            <Route path='perfil' element={<MiPerfil/>}/>

            <Route path='/detalleCupon'>
              <Route path=":couponId" element={<CouponDetails />}/>                
              <Route path=":couponId/purchase" element={<PasarelaPago />} />
              <Route path=":couponId/purchase/compra" element={<CuponAdquirido isPublic={false}/>} />
            </Route>

            <Route path='/detalleOferta'>
              <Route path=':couponId' element={<CuponAdquirido isPublic={false}/>} />
            </Route>
            
        </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App