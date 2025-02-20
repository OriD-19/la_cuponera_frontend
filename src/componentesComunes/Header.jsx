import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, UserCircleIcon, TicketIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { NavLink, useNavigate } from 'react-router';
import { Menu } from '@headlessui/react';

export const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoggedIn(!!localStorage.getItem("authToken"));
    }, [localStorage.getItem("authToken")]);

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        setIsLoggedIn(false);
        setMenuOpen(false);
        navigate("/");
    };

    return (
        <header className="flex justify-between items-center bg-white p-4 px-20 shadow-md relative">
            <NavLink to="/">
                <img src="/img/Cuponazo.png" alt="Logo" className="w-20 h-20 object-contain" />
            </NavLink>

            {/* Menú hamburguesa */}
            <input type="checkbox" id="menu-toggle" className="hidden peer" />
            <label htmlFor="menu-toggle" className="md:hidden cursor-pointer">
                <Bars3Icon className="w-8 h-8 text-black peer-checked:hidden" />
                <XMarkIcon className="w-8 h-8 text-black hidden peer-checked:block" />
            </label>

            {/* Navegación */}
            <nav className="peer-checked:flex hidden absolute z-20 top-full left-0 w-full bg-white flex-col items-center shadow-lg md:relative md:top-0 md:flex md:flex-row md:w-auto md:space-x-10 md:bg-transparent md:shadow-none">
                <NavLink to="/cuponesPublicos" className={({ isActive }) => isActive ? "text-primary font-bold" : "text-black"}>
                    Promociones
                </NavLink>

                <NavLink to="/marcas" className={({ isActive }) => isActive ? "text-primary font-bold" : "text-black"}>
                    Marca
                </NavLink>
            </nav>
            

            {/* Sección escritorio */}
            <div className="hidden md:flex space-x-4 items-center">
                {isLoggedIn && (
                    <Menu as="div" className="relative inline-block text-left">
                        <Menu.Button className="flex items-center bg-primary text-white px-4 py-2 rounded">
                            <TicketIcon className="w-5 h-5 mr-2" />
                            Mis Cupones
                            <ChevronDownIcon className="w-5 h-5 ml-2" />
                        </Menu.Button>

                        <Menu.Items className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <NavLink to="/cuponesPrivados" className={`block px-4 py-2 text-black ${active ? 'bg-gray-200' : ''}`}>
                                        Cupones Disponibles
                                    </NavLink>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <NavLink to="/canjeados" className={`block px-4 py-2 text-black ${active ? 'bg-gray-200' : ''}`}>
                                        Cupones Canjeados
                                    </NavLink>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <NavLink to="/expirados" className={`block px-4 py-2 text-black ${active ? 'bg-gray-200' : ''}`}>
                                        Cupones Vencidos
                                    </NavLink>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>
                )}

                {isLoggedIn ? (
                    <div className="relative">
                        <UserCircleIcon className="w-10 h-10 text-primary cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />

                        {menuOpen && (
                            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md p-2">
                                <NavLink to="/perfil" className="block px-4 py-2 text-black hover:bg-gray-200">Mi Perfil</NavLink>
                                <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200">
                                    Cerrar Sesión
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        <NavLink to="/registro" className="bg-primary text-white px-4 py-2 rounded">
                            Registrarse
                        </NavLink>
                        <NavLink to="/inicio" className="border border-primary text-primary px-4 py-2 rounded">
                            Iniciar sesión
                        </NavLink>
                    </>
                )}
            </div>
            
        </header>
    );
};

export default Header;
