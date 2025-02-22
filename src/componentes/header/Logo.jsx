import React from 'react';
import { NavLink } from 'react-router';

const Logo = () => (
    <NavLink to="/">
        <img src="./public/img/Cuponazo.png" alt="Logo" className="w-20 h-20 object-contain" />
    </NavLink>
);

export default Logo;
