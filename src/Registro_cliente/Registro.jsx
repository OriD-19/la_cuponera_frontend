import React, { useState } from "react";

export const Registro = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        dui: '',
    });

    const [error, setError] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación de campos
        if (!formData.username || !formData.email || !formData.password || !formData.firstName || 
            !formData.lastName || !formData.address || !formData.phoneNumber || !formData.dui) {
            setError('Por favor, complete todos los campos');
            return;
        }

        setError('');
        setMensaje('');

        try {
            // Llamada a la API para registrar al usuario
            const response = await fetch('https://ez7weiqisc.execute-api.us-east-1.amazonaws.com/v1/users/client/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setMensaje('Registro exitoso.');
                setFormData({
                    username: '',
                    email: '',
                    password: '',
                    firstName: '',
                    lastName: '',
                    address: '',
                    phoneNumber: '',
                    dui: '',
                });
            } else {
                setError(data.message || 'Error en el registro');
            }
        } catch (error) {
            setError('No se pudo conectar con el servidor');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4 text-center">Registro</h2>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            {mensaje && <p className="text-green-500 text-sm mb-4">{mensaje}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded mt-2"
                        placeholder="Ingresa tu username"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Correo</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded mt-2"
                        placeholder="Ingresa tu correo"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded mt-2"
                        placeholder="Ingresa tu contraseña"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="firstName" className="block text-gray-700">Nombre</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded mt-2"
                        placeholder="Ingresa tu nombre"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastName" className="block text-gray-700">Apellido</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded mt-2"
                        placeholder="Ingresa tu apellido"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-gray-700">Dirección</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded mt-2"
                        placeholder="Ingresa tu dirección"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-gray-700">Teléfono</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded mt-2"
                        placeholder="Ingresa tu número de teléfono"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="dui" className="block text-gray-700">DUI</label>
                    <input
                        type="text"
                        id="dui"
                        name="dui"
                        value={formData.dui}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded mt-2"
                        placeholder="Ingresa tu DUI"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-900 text-white py-2 rounded"
                >
                    Registrar
                </button>
            </form>
        </div>
    );
};
