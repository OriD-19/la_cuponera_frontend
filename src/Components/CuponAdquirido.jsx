import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useFetchBuyCoupon } from '../Hooks/useFetchBuyCoupon';

export const CuponAdquirido = () => {
    const [coupon, setCoupon] = useState(null);
    const {couponId} = useParams();
    console.log(couponId)
    useEffect(() => {
        async function fetchData() {
            const data = await useFetchBuyCoupon(couponId);
            setCoupon(data);
        }
        fetchData();
    }, []);
    if (!coupon) return <p>Cargando información del cupón...</p>;
  return (
    <div className="relative bg-fondo p-4 rounded-lg shadow-md w-full h-auto mx-auto">
    <div className="container mx-auto p-4  bg-white rounded-lg shadow-lg max-w-2xl">
        <h2 className="text-3xl text-center text-primary font-extrabold mb-4">¡Gracias por tu compra! Estos son los detalles de tu cupón:</h2>
        <img src="https://blog.facialix.com/wp-content/uploads/2024/11/css-fundamentals-comprehensive-training-for-web-developers-curso-cupon-noviembre-jpg.webp" alt="de cada cupon" />
        <h3 className="text-2xl font-semibold text-resaltador mb-2 mt-2 text-center">ID del cupón {coupon.id}</h3>
        <p className="text-lg">Precio en descuento del cupón ${coupon.offerPrice}</p>
        <p className="text-resaltador text-lg font-semibold mt-2">Válido hasta {new Date(coupon.validUntil).toLocaleDateString()}</p>
        <p className="text-primary text-lg font-semibold capitalize text-center">¡Gracias por comprar con nosotros!</p>
    </div>
</div>
  )
}