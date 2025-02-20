import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [client, setClient] = useState(null);
    const [authToken, setAuthToken] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("client");
        const storedToken = localStorage.getItem("authToken");

        if (storedUser && storedToken) {
            setClient(JSON.parse(storedUser)); // Antes: setUser(JSON.parse(storedUser))
            setAuthToken(storedToken);
        }
    }, []);

    const login = (data) => {
        setAuthToken(data.authToken);
        setClient(data.client); //  Antes: setUser(data.client)
        localStorage.setItem("authToken", data.authToken);
        localStorage.setItem("client", JSON.stringify(data.client));
    };

    const logout = () => {
        setAuthToken(null);
        setClient(null); // Antes: setUser(null)
        localStorage.removeItem("authToken");
        localStorage.removeItem("client");
    };

    return (
        <AuthContext.Provider value={{ client, authToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
