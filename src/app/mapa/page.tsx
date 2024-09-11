"use client"

import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect } from "react";

export default function Mapa() {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });

      const google = await loader.load();

      const position = {
        lat: -34.5487326222806,
        lng: -58.48010656420739,
      };

      // Opciones del mapa
      const mapOptions = {
        center: position,
        zoom: 18,
        mapId: "MY_NEXT_MAPID",
      };

      // Crear el mapa
      const mapSet = new google.maps.Map(mapRef.current as HTMLDivElement, mapOptions);
    };

    initMap();
  }, []);

  return <div className="h-[500px] w-[100%]" ref={mapRef}></div>;
}
