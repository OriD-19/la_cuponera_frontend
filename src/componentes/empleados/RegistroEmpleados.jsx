import React, { useState } from "react";

export const RegistroEmpleados = () => {
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        dui: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.username || !formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.dui) {
            setError('Por favor, complete todos los campos requeridos');
            return;
        }

        setError('');

        // Aquí iría la llamada a la API para registrar al usuario
        console.log('Registrando usuario:', formData);
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4 text-center">Registro</h2>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700">Nombre de Usuario</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full border border-red-500 p-2 rounded mt-2"
                        placeholder="Ingresa tu username"
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
                        className="w-full border border-red-500 p-2 rounded mt-2"
                        placeholder="Ingresa tu firstName"
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
                        className="w-full border border-red-500 p-2 rounded mt-2"
                        placeholder="Ingresa tu lastName"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-red-500 p-2 rounded mt-2"
                        placeholder="Ingresa tu email"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-gray-700">Número de teléfono</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        pattern="[0-9]{7}"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full border border-red-500 p-2 rounded mt-2"
                        placeholder="Ingresa tu phoneNumber"
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
                        className="w-full border border-red-500 p-2 rounded mt-2"
                        placeholder="Ingresa tu contraseña"
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
                        className="w-full border border-red-500 p-2 rounded mt-2"
                        placeholder="Ingresa tu DUI (sin guiones)"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
                >
                    Registrar
                </button>
            </form>
        </div>
    );
};
