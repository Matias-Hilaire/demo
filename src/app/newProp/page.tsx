"use client";

import { useState } from 'react';
import ThreeBarMenu from '../threeBarMenu';
import Link from 'next/link';
import Image from 'next/image';

export default function PropertyForm() {
  const [formData, setFormData] = useState({
    address: '',
    price: '',
    size: '',
    bedrooms: '',
    description: '',
    typeId: '',
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
      price: parseFloat(formData.price),
      size: parseFloat(formData.size),
      bedrooms: parseInt(formData.bedrooms),
      typeId: parseInt(formData.typeId),
    };

    // Cambiar la URL del fetch para que coincida con la ruta correcta
    const response = await fetch('/api/propiedades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(parsedData),
    });

    setLoading(false);

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
      // Capturar el mensaje de error
      const result = await response.json();
      alert(`Hubo un error al cargar la propiedad: ${result.message}`);
    }
  };

  return (
    <div className='w-full h-screen bg-gray-50 flex flex-col justify-center items-center'>
      <div className='absolute left-0 top-0'>
        <ThreeBarMenu />
      </div>

      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Cargar Nueva Propiedad</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Dirección</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingrese la dirección"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Precio</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingrese el precio"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Tamaño (m²)</label>
            <input
              type="number"
              name="size"
              value={formData.size}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingrese el tamaño en metros cuadrados"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Número de Habitaciones</label>
            <input
              type="number"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingrese el número de habitaciones"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Descripción</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingrese una breve descripción"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Tipo de Propiedad</label>
            <select
              name="typeId"
              value={formData.typeId}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full bg-my-blue text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Cargando...' : 'Cargar Propiedad'}
          </button>
        </form>
        </div>        
      <div className='w-[35px]'>
        <Link href="src\app\newProp\imagenes">
          <button className="hover:bg-slate-300 rounded-full">
              <Image
                className=""
                src="/flecha.png"
                alt="Casa 3"
                layout="responsive"
                width={1}
                height={1}
              />
          </button>
        </Link>
      </div>
    </div>
  );
}
