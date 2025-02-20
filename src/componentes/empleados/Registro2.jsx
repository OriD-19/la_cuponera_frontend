import React, { useState } from "react";

export const Registro2 = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        contrasena: '',
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

        if (!formData.nombre || !formData.correo || !formData.contrasena || !formData.dui) {
            setError('Por favor, complete todos los campos');
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
                    <label htmlFor="nombre" className="block text-gray-700">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full border border-red-500 p-2 rounded mt-2"
                        placeholder="Ingresa tu nombre"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="correo" className="block text-gray-700">Correo</label>
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={formData.correo}
                        onChange={handleChange}
                        className="w-full border border-red-500 p-2 rounded mt-2"
                        placeholder="Ingresa tu correo"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="contrasena" className="block text-gray-700">Contraseña</label>
                    <input
                        type="password"
                        id="contrasena"
                        name="contrasena"
                        value={formData.contrasena}
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
