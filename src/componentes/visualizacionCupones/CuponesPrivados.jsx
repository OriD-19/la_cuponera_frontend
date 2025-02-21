import React from "react";
import { CuponCard } from "./CuponCard";
import { useCupones } from "../../hooks/useCupones";
import { Filtro } from "./Filtro";


export const CuponesPrivados = () => {
    const { cupones, loading, error } = useCupones("privados"); 

    if (loading) return <p className="text-center text-5xl text-primary font-black">Cargando cupones...</p>;
    if (error) return <p className="text-center text-5xl text-primary font-black">Error: {error}</p>;

    return (
        <>
        <Filtro/>

        <h1 className="text-center text-5xl text-primary font-black">MIS CUPONES</h1>
        <div className="p-4 mt-6 px-20">
            {cupones.length === 0 ? (
                <p className="text-center text-5xl text-primary font-black">No hay cupones disponibles.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cupones.map((cupon) => (
                        <CuponCard key={cupon.offer.id} cupon={cupon.coupon} offer={cupon.offer} enterprise={cupon.enterprise} />
                    ))}
                </div>
            )}
        </div>
        </>
    );
};

