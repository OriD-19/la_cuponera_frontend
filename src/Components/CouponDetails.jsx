import { useState, useEffect } from "react";
import { useFetchCoupon } from "../Hooks/useFetchCoupondetails";
import {Outlet, useNavigate } from "react-router";

export default function CouponDetails() {
    const [coupon, setCoupon] = useState(null);
    const navigate = useNavigate();
    const idCoupon = '55584c62-7ccc-4574-bdc0-cc86bd323e1a'; //quemado para las pruebas. Después se puede extraer con useParams si quieren.

    useEffect(() => {
        async function fetchData() {
            const data = await useFetchCoupon(idCoupon);
            setCoupon(data);
        }
        fetchData();
    }, [idCoupon]);

    if (!coupon) return <p>Cargando información del cupón...</p>;
    return (
        <div>
            <h2>Detalles del Cupón</h2>
            <h3>{coupon.title}</h3>
            <p>{coupon.offerDesc}</p>
            <p>Precio normal: {coupon.regularPrice}</p>
            <p>Precio con descuento: {coupon.offerPrice}</p>
            <p>Valido desde {new Date(coupon.validFrom).toLocaleDateString()} hasta {new Date(coupon.validUntil).toLocaleDateString()}</p>
            <p>Existencias disponibles: {coupon.availableCoupons}</p>
            <p>Empresa ofertante: {coupon.enterpriseCode}</p>
            <p>Categoría: {coupon.category}</p>
            <button onClick={() => navigate(`/${idCoupon}/purchase`)}>Comprar</button>
            <Outlet />
            </div>
    );
}