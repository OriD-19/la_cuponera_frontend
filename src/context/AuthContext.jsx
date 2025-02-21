import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [client, setClient] = useState(null);
    const [authToken, setAuthToken] = useState(null);
    const [clientCoupons, setClientCoupons] = useState([]);
    const [selectedCouponId, setSelectedCouponId] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("client");
        const storedToken = localStorage.getItem("authToken");
        const storedCoupons = localStorage.getItem("clientCoupons");
        const storedCouponId = localStorage.getItem("selectedCouponId");

        if (storedUser && storedToken) {
            setClient(JSON.parse(storedUser));
            setAuthToken(storedToken);
        }
        
        if (storedCoupons) {
            setClientCoupons(JSON.parse(storedCoupons));
        }
        
        if (storedCouponId) {
            setSelectedCouponId(storedCouponId);
        }
    }, []);

    const fetchClientCoupons = async (token) => {
        try {
            const response = await fetch("https://ez7weiqisc.execute-api.us-east-1.amazonaws.com/v1/offers/allFromUser", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error("Error al obtener los cupones del usuario");
            }

            const data = await response.json();
            const offers = data.offers || [];

            setClientCoupons(offers);
            localStorage.setItem("clientCoupons", JSON.stringify(offers));
        } catch (error) {
            console.error("Error obteniendo cupones:", error);
        }
    };

    const selectCoupon = (couponId) => {
        setSelectedCouponId(couponId);
        localStorage.setItem("selectedCouponId", couponId);
    };

    const login = async (data) => {
        setAuthToken(data.authToken);
        setClient(data.client);
        localStorage.setItem("authToken", data.authToken);
        localStorage.setItem("client", JSON.stringify(data.client));

        await fetchClientCoupons(data.authToken);
    };

    const logout = () => {
        setAuthToken(null);
        setClient(null);
        setClientCoupons([]);
        setSelectedCouponId(null); // Asegurar que se limpia el estado
        localStorage.removeItem("authToken");
        localStorage.removeItem("client");
        localStorage.removeItem("clientCoupons");
        localStorage.removeItem("selectedCouponId"); // Limpiar el localStorage
    };
    

    return (
        <AuthContext.Provider value={{ client, authToken, clientCoupons, selectedCouponId, selectCoupon, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
