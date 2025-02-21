import { BrowserRouter, Route, Routes } from "react-router";
import CouponDetails from "./Components/CouponDetails";
import PasarelaPago from "./Components/PasarelaPago";
import { CuponAdquirido } from "./Components/CuponAdquirido";

function App() {
    return (
      <BrowserRouter>
            <Routes>
                <Route path="/:couponId" element={<CouponDetails />} />                
                <Route path="/:couponId/purchase" element={<PasarelaPago />} />
                <Route path="/compra/:couponId" element={<CuponAdquirido/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
