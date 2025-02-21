import React, { useEffect, useState, useContext } from "react";
import { CuponCard } from "./CuponCard";
import { Filtro } from "./Filtro";
import { SelectedCategoryContext } from "../../context/CategoryContext";

export const CuponesPublicos = () => {

    const { filteredCoupons, selectedCategory } = useContext(SelectedCategoryContext);
    const [cuponesVisibles, setCuponesVisibles] = useState(filteredCoupons);

    useEffect(() => {
        console.log("Actualizando cupones visibles:", filteredCoupons);
        setCuponesVisibles(filteredCoupons);
    }, [filteredCoupons]);


    return (
        <>
            <Filtro />
            <div className="p-5">
                <h1 className="text-center text-5xl text-primary font-black">OFERTAS</h1>
            </div>
            <div className="p-4 mt-6 px-20">
                {cuponesVisibles.length === 0 ? (
                    <p className="text-gray-700 text-lg items-center">No hay cupones disponibles.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {cuponesVisibles.map((cupon) => (
                            <CuponCard key={cupon.id} cupon={cupon} />
                        ))}
                    </div>
                )}
                {/* 
                !AÑADIR DE VUELTA CUANDO VUELVA LA PAGINACIÓN

                <div className="flex items-center justify-center flex-row my-4">
                    {next && <button className="cursor-pointer p-3 bg-slate-800 text-white " onClick={() => setLoadMore((prev) => !prev)}>Cargar Más</button>}
                </div>
                */}
            </div>
        </>
    );
};



