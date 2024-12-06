"use client";

import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useState } from "react";
import ThreeBarMenu from "../threeBarMenu";

interface Property {
  id: number;
  address: string;
  latitude: number;
  longitude: number;
}

export default function Mapa() {
  const mapRef = React.useRef<HTMLDivElement>(null);
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    // Función para obtener propiedades desde el backend
    const fetchProperties = async () => {
      try {
        const response = await fetch("/api/propiedades");
        const data = await response.json();
        setProperties(data); // Suponiendo que el backend devuelve un array de propiedades
      } catch (error) {
        console.error("Error al obtener las propiedades:", error);
      }
    };

    fetchProperties();
  }, []);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });

      const google = await loader.load();

      const position = { lat: -41.13371076836307, lng: -71.31022890074323 };

      const mapOptions = {
        center: position,
        zoom: 13,
        mapId: "MY_NEXT_MAPID",
      };

      const mapSet = new google.maps.Map(
        mapRef.current as HTMLDivElement,
        mapOptions
      );

      // Agregar punteros dinámicos según las propiedades
      properties.forEach((property) => {
        new google.maps.Marker({
          position: { lat: property.latitude, lng: property.longitude },
          map: mapSet,
          title: property.address,
        });
      });
    };

    if (properties.length > 0) {
      initMap();
    }
  }, [properties]);

  return (
    <div className="w-full h-screen bg-white flex flex-col justify-center items-center">
      <div className="absolute left-0 top-0">
        <ThreeBarMenu />
      </div>
      <div className="w-[95%] h-[90%] rounded-xl" ref={mapRef}></div>
    </div>
  );
}
