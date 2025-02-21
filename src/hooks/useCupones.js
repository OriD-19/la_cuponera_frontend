import { useState, useEffect } from "react";

export const useCupones = (tipo) => {
    const [cupones, setCupones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [next, setNext] = useState(null);
    const [loadMore, setLoadMore] = useState(false)
    const authToken = localStorage.getItem("authToken");

    useEffect(() => {
        const fetchCupones = async () => {
            setLoading(true);
            setError(null);

            const endpoint =
                tipo === "privados"
                    ? "https://ez7weiqisc.execute-api.us-east-1.amazonaws.com/v1/offers/allFromUser"
                    : (
                        next !== null 
                        ? "https://ez7weiqisc.execute-api.us-east-1.amazonaws.com/v1/coupons?next=" + next
                        : "https://ez7weiqisc.execute-api.us-east-1.amazonaws.com/v1/coupons"
                    );

            try {
                const response = await fetch(endpoint, {
                    method: "GET",
                    headers: authToken ? { "Authorization": `Bearer ${authToken}` } : {},
                });

                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }

                const data = await response.json();
                setCupones([...cupones, ...(tipo === "privados" ? data.offers || [] : data.coupons || [])]);
                setNext(data.next);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCupones();
    }, [authToken, loadMore]);

    return { cupones, loading, error, next, setLoadMore };
};
