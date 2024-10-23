"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThreeBarMenu from '@/app/threeBarMenu';

export default function ImageForm() {
  const [formData, setFormData] = useState({
    propertyId: '',
    description: '',
    imageFile: null as File | null,
    previewUrl: '',
  });
  const [loading, setLoading] = useState(false); // Estado para el botón de carga

  // Maneja el evento de soltar el archivo en el área de arrastrar y soltar
  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0]; // Solo se maneja el primer archivo

    if (file && file.type.startsWith('image/')) {
      setFormData({
        ...formData,
        imageFile: file,
        previewUrl: URL.createObjectURL(file), // Crear una URL de previsualización para la imagen
      });
    }
  };

  // Maneja los cambios en los campos del formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Preparar los datos del formulario, incluida la imagen
    const body = new FormData();
    body.append('propertyId', formData.propertyId);
    body.append('description', formData.description);
    if (formData.imageFile) {
      body.append('image', formData.imageFile); // Enviar la imagen como archivo
    }

    const response = await fetch('/api/images', {
      method: 'POST',
      body,
    });

    setLoading(false);

    if (response.ok) {
      alert('Imagen cargada exitosamente');
      // Reiniciar el formulario
      setFormData({
        propertyId: '',
        description: '',
        imageFile: null,
        previewUrl: '',
      });
    } else {
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
            <input
              type="text"
              name="propertyId"
              value={formData.propertyId}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ID de la propiedad"
              required
            />
          </div>

          <div
            className="w-full h-32 border-2 border-dashed border-gray-300 flex items-center justify-center rounded-md cursor-pointer mb-4"
            onDrop={handleFileDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            {formData.previewUrl ? (
              <Image
                src={formData.previewUrl}
                alt="Previsualización de la imagen"
                className="object-contain"
                width={150}
                height={150}
              />
            ) : (
              <span className="text-gray-400">Arrastra y suelta una imagen aquí</span>
            )}
          </div>

          <div className="mb-4">
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
