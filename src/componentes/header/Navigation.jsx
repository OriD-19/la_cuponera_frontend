import React from 'react';
import { NavLink } from 'react-router';


const Navigation = () => (
    <nav className="peer-checked:flex hidden absolute z-20 top-full left-0 w-full bg-white flex-col items-center shadow-lg md:relative md:top-0 md:flex md:flex-row md:w-auto md:space-x-6 md:bg-transparent md:shadow-none">
        <NavLink to="/cuponesPublicos" className={({ isActive }) => `inline-flex items-center text-black ${isActive ? "text-primary font-bold" : ""}`}>
            Promociones
        </NavLink>
        <NavLink to="/marcas" className={({ isActive }) => `inline-flex items-center text-black ${isActive ? "text-primary font-bold" : ""}`}>
            Marca
        </NavLink>
    </nav>
);

export default Navigation;
