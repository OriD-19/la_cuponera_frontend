import React, { useEffect, useState } from "react";
import { CuponCard } from "./CuponCard";

export const Cupones = () => {
    const [cupones, setCupones] = useState([]);

    useEffect(() => {
        const fetchCupones = async () => {
            try {
                const response = await fetch(
                    "https://ez7weiqisc.execute-api.us-east-1.amazonaws.com/v1/coupons"
                );
                const data = await response.json();
                setCupones(data.coupons || []); // Asegura que siempre sea un array
            } catch (error) {
                console.error("Error al obtener los cupones:", error);
            }
        };

        fetchCupones();
    }, []);

    return (
        <div className="p-4 mt-6 px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cupones.map((cupon) => (
                    <CuponCard key={cupon.id} cupon={cupon} />
                ))}
            </div>
        </div>
    );
};
