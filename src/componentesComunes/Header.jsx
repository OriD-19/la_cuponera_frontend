import React from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router';

export const Header = () => {
    return (
        <header className="flex justify-between items-center bg-white p-4 px-20 shadow-md relative">
            <img src="./public/img/Cuponazo.png" alt="Logo" className="w-20 h-20 object-contain" />

            {/* Checkbox para controlar el menú hamburguesa */}
            <input type="checkbox" id="menu-toggle" className="hidden peer" />

            {/* Ícono del menú hamburguesa, se utiliza 'Heroicons' */}
            <label htmlFor="menu-toggle" className="md:hidden cursor-pointer">
                <Bars3Icon className="w-8 h-8 text-black peer-checked:hidden" />
                <XMarkIcon className="w-8 h-8 text-black hidden peer-checked:block" />
            </label>

            {/* Clase para mostrar el menu hamburguesa y estilo que tiene */}
            <nav className="peer-checked:flex hidden absolute z-20 top-full left-0 w-full bg-white flex-col items-center space-y-4 shadow-lg md:relative md:top-0 md:flex md:flex-row md:w-auto md:space-x-4 md:bg-transparent md:shadow-none">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "text-primary font-bold" : "text-black"}
                >
                    Promociones
                </NavLink>

                <NavLink
                    to="marcas"
                    className={({ isActive }) => isActive ? "text-primary font-bold" : "text-black"}
                >
                    Marca
                </NavLink>

                {/* Muestra menu de hamburguesaa */}
                <div className="flex flex-col items-center space-y-2 w-full h-[150px] md:hidden">
                    <button className="bg-primary text-white px-4 py-2 rounded w-3/4">Registrarse</button>
                    <button className="border border-primary text-primary px-4 py-2 rounded w-3/4">Iniciar sesión</button>
                </div>
            </nav>

            <div className="hidden md:flex space-x-2">
                <button className="bg-primary text-white px-4 py-2 rounded">Registrarse</button>
                <button className="border border-primary text-primary px-4 py-2 rounded">Iniciar sesión</button>
            </div>
        </header>
    )
}

export default Header;