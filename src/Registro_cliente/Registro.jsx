import React, { useState } from "react";

export const Registro = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        contrasena: '',
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

        if (!formData.nombre || !formData.correo || !formData.contrasena || !formData.dui) {
            setError('Por favor, complete todos los campos');
            return;
        }

        setError('');
        setMensaje('');

        try {
            const response = await fetch('http://localhost:5000/api/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setMensaje('Registro exitoso.');
                setFormData({ nombre: '', correo: '', contrasena: '', dui: '' });
            } else {
                setError(data.message || 'Error en el registro');
            }
        } catch (error) {
            setError('No se pudo conectar con el servidor');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Registro</h2>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            {mensaje && <p className="text-green-500 text-sm mb-4">{mensaje}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-gray-700">Nombre</label>
                    <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded mt-2" placeholder="Ingresa tu nombre" />
                </div>
                <div className="mb-4">
                    <label htmlFor="correo" className="block text-gray-700">Correo</label>
                    <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded mt-2" placeholder="Ingresa tu correo" />
                </div>
                <div className="mb-4">
                    <label htmlFor="contrasena" className="block text-gray-700">Contraseña</label>
                    <input type="password" id="contrasena" name="contrasena" value={formData.contrasena} onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded mt-2" placeholder="Ingresa tu contraseña" />
                </div>
                <div className="mb-4">
                    <label htmlFor="dui" className="block text-gray-700">DUI</label>
                    <input type="text" id="dui" name="dui" value={formData.dui} onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded mt-2" placeholder="Ingresa tu DUI" />
                </div>
                <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded">Registrar</button>
            </form>
        </div>
    );
};
