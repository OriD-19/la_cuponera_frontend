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

    const selectCoupon = (couponId) => {
        setSelectedCouponId(couponId);
        localStorage.setItem("selectedCouponId", couponId);
    };

    const login = async (data) => {
        setAuthToken(data.authToken);
        setClient(data.client);
        localStorage.setItem("authToken", data.authToken);
        localStorage.setItem("client", JSON.stringify(data.client));
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
