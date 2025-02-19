import React from 'react'
import { CuponCard } from './CuponCard'

export const Cupones = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 p-4 mt-6 px-20">
            {[...Array(12)].map((_, index) => (
                <CuponCard key={index} />
            ))}
        </div>
    )
}
