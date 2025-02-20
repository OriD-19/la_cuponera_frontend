import { useState, useEffect } from "react";

export const useCupones = (tipo) => {
    const [cupones, setCupones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const authToken = localStorage.getItem("authToken");

    useEffect(() => {
        const fetchCupones = async () => {
            setLoading(true);
            setError(null);

            const endpoint =
                tipo === "privados"
                    ? "https://ez7weiqisc.execute-api.us-east-1.amazonaws.com/v1/offers/allFromUser"
                    : "https://ez7weiqisc.execute-api.us-east-1.amazonaws.com/v1/coupons";

            try {
                const response = await fetch(endpoint, {
                    method: "GET",
                    headers: authToken ? { "Authorization": `Bearer ${authToken}` } : {},
                });

                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }

                const data = await response.json();
                setCupones(tipo === "privados" ? data.offers || [] : data.coupons || []);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCupones();
    }, [authToken, tipo]);

    return { cupones, loading, error };
};
