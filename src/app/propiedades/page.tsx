"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Property {
  id: number;
  address: string;
  price: number;
  size: number;
  bedrooms: number;
  description: string;
  typeId: number;
  createdAt: string;
  images: { id: number; url: string; description: string }[];
}

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("api/propiedades");
        if (!response.ok) throw new Error("Error al obtener las propiedades.");
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-500">Cargando propiedades...</div>;
  }

  if (properties.length === 0) {
    return <div className="text-center text-gray-500">No hay propiedades disponibles en este momento.</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Propiedades Disponibles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={property.images?.[0]?.url || "/placeholder.png"}
              alt={property.images?.[0]?.description || "Sin imagen"}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{property.address}</h2>
              <p className="text-gray-500 text-sm">{property.description}</p>
              <p className="mt-2 text-gray-800">
                <span className="font-bold">Precio:</span> ${property.price.toLocaleString()}
              </p>
              <p className="text-gray-800">
                <span className="font-bold">Tamaño:</span> {property.size} m²
              </p>
              <p className="text-gray-800">
                <span className="font-bold">Habitaciones:</span> {property.bedrooms}
              </p>
              <Link
                href={`/properties/${property.id}`}
                className="block mt-4 text-blue-500 hover:underline"
              >
                Ver más detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
