import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { CouponCompradoDetails } from './CouponCompradoDetails';
import useFetchBuyCoupon from '../../hooks/useFetchBuyCoupon';
import useFetchOfferDetails from '../../hooks/useFetchOfferDetails';

const CuponAdquirido = ({ isPublic }) => {
    const [coupon, setCoupon] = useState(null);
    const {couponId} = useParams();
    
    console.log(couponId)
    useEffect(() => {
        async function fetchData() {
            const data = isPublic ? await useFetchBuyCoupon(couponId) : await useFetchOfferDetails(couponId);
            setCoupon(data);
        }
        fetchData();
    }, []);
    if (!coupon) return <p>Cargando información del cupón...</p>;
  return (
    <CouponCompradoDetails coupon={coupon.offer}/>
  )
}

export default CuponAdquirido;