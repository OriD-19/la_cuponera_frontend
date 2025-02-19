import React, { useState } from "react";

export const IniciarSesion = () => {
    const [formData, setFormData] = useState({
        correo: '',
        contrasena: '',
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

        if (!formData.correo || !formData.contrasena) {
            setError('Por favor, ingresa todos los datos');
            return;
        }

        setError('');

        // Aquí iría la llamada a la API para autenticar al usuario
        console.log('Iniciando sesión con:', formData);
    };

    return (
        <div className="flex items-start justify-center min-h-screen pt-20 bg-gray-100">
            <div className="max-w-md w-full bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4 text-center">Iniciar sesión</h2>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
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
                    <button
                        type="submit"
                        className="w-full bg-blue-900 text-white py-2 rounded"
                    >
                        Iniciar sesión
                    </button>
                </form>
            </div>
        </div>
    );
};
