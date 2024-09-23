"use client";
import React, { useState } from 'react';

export default function ThreeBarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative z-50">
      {/* abre la barra */}
      <div 
        className="absolute left-0 h-screen w-6 z-40" 
        onMouseEnter={openMenu} 
      ></div>

      <button 
        onClick={openMenu} 
        className="p-4 text-my-blue rounded-br"
      >
        <div className="w-6 h-1 bg-my-blue mb-1 rounded-md shadow-md"></div>
        <div className="w-6 h-1 bg-my-blue mb-1 rounded-md shadow-md"></div>
        <div className="w-6 h-1 bg-my-blue rounded-md shadow-md"></div>
      </button>

      <nav 
        className={`menu-bar fixed top-0 w-64 h-full bg-my-blue text-white shadow-2xl
                    flex flex-col items-center pt-10 transition-transform duration-300 
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}

        onMouseLeave={closeMenu}  // Cierra el menu 
      >
      <button 
          onClick={closeMenu}
          className="mb-5"
        >
          Cerrar
      </button>
        <a href="../" className="py-2 px-4">Inicio</a>
        <a href="../propiedades" className="py-2 px-4">Propiedades</a>
        <a href="../mapa" className="py-2 px-4">Mapa</a>
        <a href="../contactanos" className="py-2 px-4">Contacto</a>
      </nav>
    </div>
  );
}
