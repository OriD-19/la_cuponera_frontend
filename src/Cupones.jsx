import React, { useEffect, useState } from "react";
import { CuponCard } from "./CuponCard";


export const Cupones = () => {
    const [cupones, setCupones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const authToken = localStorage.getItem("authToken"); // Verifica si el usuario está logueado

    useEffect(() => {
        const fetchCupones = async () => {
            setLoading(true);
            setError(null);
    
            const endpoint = authToken
                ? "https://ez7weiqisc.execute-api.us-east-1.amazonaws.com/v1/offers/allFromUser"
                : "https://ez7weiqisc.execute-api.us-east-1.amazonaws.com/v1/coupons";
    
            console.log("Obteniendo cupones desde:", endpoint);
    
            try {
                const response = await fetch(endpoint, {
                    method: "GET",
                    headers: authToken ? { "Authorization": `Bearer ${authToken}` } : {},
                });
    
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }
    
                const data = await response.json();
                console.log("Respuesta de la API:", data);
                const cuponesObtenidos = authToken ? data.offers : data.coupons;
                console.log(cuponesObtenidos)
                setCupones(Array.isArray(cuponesObtenidos) ? cuponesObtenidos : []); 
            } catch (error) {
                console.error("Error al obtener los cupones:", error);
                setError(error.message);
                setCupones([]);
            } finally {
                setLoading(false);
            }
        };
    
        fetchCupones();
    }, [authToken]);    

    if (loading) return <p>Cargando cupones...</p>;
    if (error) return <p>Error: {error}</p>;


    return (
        <div className="p-4 mt-6 px-20">
            {cupones.length === 0 ? (
                <p>No hay cupones disponibles.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cupones.map((cupon) => (
                        <CuponCard key={cupon.id} cupon={cupon} />
                    ))}
                </div>
            )}
        </div>
    );
};
