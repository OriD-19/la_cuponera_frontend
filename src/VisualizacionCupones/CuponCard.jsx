import React from 'react'

export const CuponCard = () => {
    return (
        <div className="relative bg-blue-300 p-4 rounded-lg shadow-md ">
            <div className="absolute top-2 right-2 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded-full">
                <p>%</p>
            </div>
            <div className="bg-blue-900 h-6 w-3/4 mt-4 rounded">ACA LA INFO DEL CUPON</div>
        </div>
    )
}
