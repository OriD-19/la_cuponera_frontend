import React from 'react'
import { NavLink } from 'react-router';

export const Header = () => {
    return (
        <header className="flex justify-between items-center bg-white p-4 px-20 shadow-md">
            <div className="text-4xl font-bold text-blue-900">★</div>
            <nav className="space-x-4">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "text-blue-900 font-semibold" : "text-gray-700"
                    }
                >Promociones
                </NavLink>

                <NavLink
                    to="marcas"
                    className={({ isActive }) =>
                        isActive ? "text-blue-900 font-semibold" : "text-gray-700"
                    }
                >Marca</NavLink>
            </nav>
            <div className="space-x-2">
                <button className="bg-blue-900 text-white px-4 py-2 rounded">Regitarse</button>
                <button className="border border-blue-900 text-blue-900 px-4 py-2 rounded">Iniciar sesión</button>
            </div>
        </header>
    )
}

export default Header;