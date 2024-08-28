"use client"
import React, { useState } from 'react';

const ThreeBarMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);

    };

    return (
        <div className="relative">
            <button 
                onClick={toggleMenu} 
                className="p-4 text-my-blue rounded-br"
            >
                <div className="w-6 h-1 bg-my-blue mb-1 rounded"></div>
                <div className="w-6 h-1 bg-my-blue mb-1 rounded"></div>
                <div className="w-6 h-1 bg-my-blue rounded"></div>
            </button>

            <nav 
                className={`menu-bar fixed top-0 left-0 w-64 h-full bg-my-blue text-white 
                            flex flex-col items-center pt-10 transition-transform duration-300 
                            ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>

        <button
        onClick={() => setIsOpen(false)}
          className={`text-white transition-transform duration-300`}>a</button>                
                <a href="#" className="py-2 px-4">Inicio</a>
                <a href="#" className="py-2 px-4">propiedades</a>
                <a href="#" className="py-2 px-4">Contacto</a>
            </nav>
        </div>
    );
};

export default ThreeBarMenu;
