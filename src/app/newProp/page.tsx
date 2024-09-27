"use client";

import { useState } from 'react';
import ThreeBarMenu from '../threeBarMenu';
import Image from 'next/image';
import Link from 'next/link';

export default function PropertyForm() {
  const [formData, setFormData] = useState({
    address: '',
    price: '',
    size: '',
    bedrooms: '',
    description: '',
    typeId: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/properties', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Propiedad cargada exitosamente');
      // Resetea el formulario
      setFormData({
        address: '',
        price: '',
        size: '',
        bedrooms: '',
        description: '',
        typeId: '',
      });
    } else {
      alert('Hubo un error al cargar la propiedad');
    }
  };

  return (
    <div className='w-full h-screen bg-white flex flex-col justify-center items-center'>
      <div className='absolute left-0 top-0'><ThreeBarMenu/></div>
    <div className="w-[35%] h-[90%] p-6 bg-slate-100 justify-center items-center rounded-lg shadow-2xl">
      <h2 className="text-2xl font-semibold text-black mb-6">Cargar Nueva Propiedad</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-black">Dirección</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="text-black w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-black">Precio</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="text-black w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-black">Tamaño (m²)</label>
          <input
            type="number"
            name="size"
            value={formData.size}
            onChange={handleInputChange}
            className="text-black w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-black">Número de Habitaciones</label>
          <input
            type="number"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleInputChange}
            className="text-black w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-black">Descripción</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="text-black w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-black">Tipo de Propiedad</label>
          <select
            name="typeId"
            value={formData.typeId}
            onChange={handleInputChange}
            className="text-black w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          >
            <option value="">Selecciona un tipo</option>
            <option value="1">Casa</option>
            <option value="2">Departamento</option>
            <option value="3">Terreno</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Cargar Propiedad
        </button>
      </form>
    </div>
</div>
  );
}
