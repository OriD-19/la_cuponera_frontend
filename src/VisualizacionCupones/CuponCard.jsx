import React from "react";

export const CuponCard = ({ cupon }) => {
    return (
        <div className="relative bg-fondo p-4 rounded-lg shadow-md w-full h-auto mx-auto">
            <div className="absolute top-2 right-2 bg-resaltador text-white text-sm font-bold px-2 py-1 rounded-full">
                <p>%</p>
            </div>
            <div className="h-auto">
                <img src="./public/img/Cuponazo.png" alt="imagen ilustrativa" className="place-self-center w-auto h-40" />
                <p className="mt-3 font-bold">{cupon.title}</p>
                <p className="font-semibold">{cupon.enterpriseCode}</p>
                <p>Desde: {new Date(cupon.validFrom).toLocaleDateString()} - Hasta: {new Date(cupon.validUntil).toLocaleDateString()}</p>
                <p>Precio Regular: ${cupon.regularPrice}</p>
                <p>Precio Oferta: ${cupon.offerPrice}</p>
                <p>{cupon.offerDesc}</p>
            </div>
            <button className="bg-primary h-7 w-full mt-4 rounded text-white items-center text-center hover:bg-resaltador transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-96">
                Ver oferta
            </button>
        </div>
    );
};
