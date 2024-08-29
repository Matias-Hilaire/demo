"use client";
import React from 'react';
import Image from 'next/image';
import ThreeBarMenu from '../threeBarMenu';

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-500 flex flex-col items-center justify-start py-10 px-4">
        <div><ThreeBarMenu/></div>
      <h1 className="text-4xl font-bold mb-6">Contáctanos</h1>

      {/*Información de contacto*/}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-black">Información de Contacto</h2>
        <p className="mb-2">
          <strong className="text-black">Email: contacto@ejemplo.com</strong> 
        </p>
        <p className="mb-2">
          <strong className="text-black">Teléfono: +54 9 1234 5678</strong>
        </p>
        <div className="mt-2">
          <h3 className="text-xl font-semibold mb-2 text-black">redes sociales</h3>
          <div className="flex space-x-4">
            {/*Enlaces a redes sociales*/}
            <a href="https://www.facebook.com" className="text-blue-600 hover:text-blue-800">
              Facebook</a>
            <a href="https://www.instagram.com" className="text-pink-500 hover:text-pink-700">
              Instagram</a>
          </div>
        </div>
      </div>

      {/*Formulario de contacto*/}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-black">mandanos un mensaje</h2>
        <form className="flex flex-col space-y-4">
          {/*para el mensaje*/}
          <textarea
            className="border border-my-blue p-2 rounded-md resize-none h-32"
            placeholder="Escribe tu mensaje aquí..."
            required
          ></textarea>

          {/*para el mail*/}
          <input
            type="email"
            className="border border-my-blue p-2 rounded-md"
            placeholder="Tu correo electrónico"
            required
          />

          {/*para enviar*/}
          <button
            type="submit"
            className="bg-my-blue text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}