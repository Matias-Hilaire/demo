"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThreeBarMenu from '@/app/threeBarMenu';

export default function ImageForm() {
  const [formData, setFormData] = useState({
    propertyId: '',
    url: '',
    description: '',
  });

  const [loading, setLoading] = useState(false); // Estado para mostrar el loading

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Convertir los valores a los tipos adecuados
    const parsedData = {
      ...formData,
      propertyId: parseInt(formData.propertyId),
    };

    // Cambiar la URL del fetch para que coincida con la ruta correcta
    const response = await fetch('/api/images', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(parsedData),
    });

    setLoading(false);

    if (response.ok) {
      alert('Imagen cargada exitosamente');
      // Resetea el formulario
      setFormData({
        propertyId: '',
        url: '',
        description: '',
      });
    } else {
      // Capturar el mensaje de error
      const result = await response.json();
      alert(`Hubo un error al cargar la imagen: ${result.message}`);
    }
  };

  return (
    <div className='w-full h-screen bg-gray-50 flex flex-col justify-center items-center'>
        <div className='absolute left-0 top-0'>
            <ThreeBarMenu />
        </div>
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Cargar Nueva Imagen</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">ID de la Propiedad</label>
            <input
              type="number"
              name="propertyId"
              value={formData.propertyId}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingrese el ID de la propiedad"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">URL de la Imagen</label>
            <input
              type="text"
              name="url"
              value={formData.url}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingrese la URL de la imagen"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Descripción (opcional)</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingrese una breve descripción de la imagen"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-my-blue text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Cargando...' : 'Cargar Imagen'}
          </button>
        </form>
      </div>
    </div>
  );
}
