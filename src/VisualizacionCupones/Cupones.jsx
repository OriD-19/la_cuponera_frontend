import React from 'react'
import { CuponCard } from './CuponCard'

export const Cupones = () => {
    return (
        <div className="grid grid-cols-3 gap-4 mt-6 px-20">
            {[...Array(12)].map((_, index) => (
                <CuponCard key={index} />
            ))}
        </div>
    )
}
