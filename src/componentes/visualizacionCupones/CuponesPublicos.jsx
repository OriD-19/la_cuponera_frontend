import React from "react";
import { CuponCard } from "./CuponCard";
import { useCupones } from "../../hooks/useCupones";
import { Filtro } from "./Filtro";


export const CuponesPublicos = () => {
    const { cupones, loading, error, next, setLoadMore } = useCupones("publicos");

    if (loading) return <p className="text-gray-700 text-lg items-center">Cargando cupones...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <Filtro />
            <div className="p-4 mt-6 px-20">
                {cupones.length === 0 ? (
                    <p className="text-gray-700 text-lg items-center">No hay cupones disponibles.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {cupones.map((cupon) => (
                            <CuponCard key={cupon.id} cupon={cupon} />
                        ))}
                    </div>
                )}
                {next && <button className="cursor-pointer p-6 bg-slate-800 text-white" onClick={() => setLoadMore((prev) => !prev)}>Cargar Más</button>}
            </div>
        </>
    );
};
