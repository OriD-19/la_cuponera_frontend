import React from 'react'

export const CuponCard = () => {
    return (
        <div className="relative bg-fondo p-4 rounded-lg shadow-md w-full h-auto mx-auto ">
            <div className="absolute top-2 right-2 bg-resaltador text-white text-sm font-bold px-2 py-1 rounded-full">
                <p>%</p>
            </div>
            <div className='h-auto'>
                <img src="./public/img/Cuponazo.png" alt="imagen ilustrativa" className='place-self-center w-auto h-40'/>
                <p className='mt-3 font-bold'>Descripción de la promoción</p>
                <p className='font-semibold'>Empresa</p>
                <p>Fecha</p>
            </div>
            <button className="bg-primary h-7 w-full mt-4 rounded text-white items-center text-center hover:bg-resaltador transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-96">Ver oferta</button>
        </div>
    )
}
