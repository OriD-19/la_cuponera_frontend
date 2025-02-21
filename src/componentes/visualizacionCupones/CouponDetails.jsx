import { useState, useEffect, useContext } from "react";
import { Outlet, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import useFetchCoupon from "../../hooks/useFetchCoupondetails";

export default function CouponDetails() {
    const [coupon, setCoupon] = useState(null);
    const navigate = useNavigate();
    const { selectedCouponId } = useContext(AuthContext); // Obtener el cupón seleccionado

    useEffect(() => {
        async function fetchData() {
            if (!selectedCouponId) return; // Si no hay cupón seleccionado, no hacer la petición
            const data = await useFetchCoupon(selectedCouponId);
            setCoupon(data);
        }
        fetchData();
    }, [selectedCouponId]);

    if (!coupon) return <p>Cargando información del cupón...</p>;

    return (
        <div className="relative bg-fondo p-4 rounded-lg shadow-md w-full h-auto mx-auto">
            <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg max-w-2xl">
                <h2 className="text-3xl text-center text-primary font-extrabold mb-4">Detalles del Cupón</h2>
                <img src="https://blog.facialix.com/wp-content/uploads/2024/11/css-fundamentals-comprehensive-training-for-web-developers-curso-cupon-noviembre-jpg.webp" alt="Cupón" />
                <h3 className="text-2xl font-semibold text-resaltador mb-2 mt-2">{coupon.title}</h3>
                <p className="text-lg">{coupon.offerDesc}</p>
                <p className="font-bold line-through">Precio normal: ${coupon.regularPrice}</p>
                <p className="text-xl font-bold text-primary">Precio con descuento: ${coupon.offerPrice}</p>
                <p className="text-lg font-bold mt-2">Período de Validez y Existencias</p>
                <p className="mt-1">Válido desde {new Date(coupon.validFrom).toLocaleDateString()} hasta {new Date(coupon.validUntil).toLocaleDateString()}</p>
                <p className="text-gray-700">Cupones disponibles: {coupon.availableCoupons}</p>
                <p className="text-resaltador text-lg font-semibold mt-2">Empresa ofertante: {coupon.enterpriseCode}</p>
                <p className="text-primary text-lg font-semibold capitalize">Categoría: {coupon.category}</p>
                <button onClick={() => navigate(`/${selectedCouponId}/purchase`)} className="bg-primary py-2.5 w-full mt-4 rounded-lg text-white text-center hover:bg-resaltador transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-96">
                    Comprar
                </button>
            </div>
            <Outlet />
        </div>
    );
}
