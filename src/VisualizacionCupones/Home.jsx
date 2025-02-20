import React from 'react'
import { Filtro } from './Filtro'
import { Cupones } from './Cupones'
import { useFilteredCoupons } from './categorias/useFilteredCoupons';
import { CuponCard } from './CuponCard';


export const Home = () => {
const { filteredCoupons } = useFilteredCoupons();

  return (
    <div>
      <Filtro />
      <Cupones />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredCoupons.map((coupon) => (
          <CuponCard key={coupon.id} coupon={coupon} />
        )) || []}
      </div>
    </div >
  )
}
