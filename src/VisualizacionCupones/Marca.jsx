import React from 'react'

export const MostrarMarcas=() => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4  gap-4 p-4 mt-6 px-20">
            {[...Array(8)].map((_, index) => (
                <Marca key={index} />
            ))}
        </div>
    )
}




const Marca = () => {
    return (
        <div className="bg-primary p-4 rounded-lg shadow-md w-full h-auto flex space-x-4 justify-center object-contain">
            <div className='flex flex-col justify-center items-center h-auto md:h-auto overflow-hidden'>
                <img src="./public/img/salon.jpg" alt="imagen ilustrativa" className='w-40 h-20 md:h-40 object-contain' />
                <p className='font-semibold text-center mt-2 text-white'>Empresa</p>
            </div>
        </div>
    )
}

