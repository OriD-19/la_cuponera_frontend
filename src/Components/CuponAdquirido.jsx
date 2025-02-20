import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useFetchBuyCoupon } from '../Hooks/useFetchBuyCoupon';

export const CuponAdquirido = () => {
    const [coupon, setCoupon] = useState(null);
    const {idCoupon} = useParams();
    useEffect(() => {
        async function fetchData() {
            const data = await useFetchBuyCoupon(idCoupon);
            setCoupon(data);
        }
        fetchData();
    }, [coupon]);
    if (!coupon) return <p>Cargando información del cupón...</p>;
  return (
    <div>CuponAdquirido</div>
  )
}
