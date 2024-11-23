"use client"

import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect } from "react";
import ThreeBarMenu from "../threeBarMenu";

export default function Mapa() {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });

      const google = await loader.load();

      const position = { lat: -41.13371076836307, lng: -71.31022890074323};

      const mapOptions = {
        center: position,
        zoom: 13,
        mapId: "MY_NEXT_MAPID",
      };

      const mapSet = new google.maps.Map(mapRef.current as HTMLDivElement, mapOptions);
    };

    initMap();
  }, []);

  return (
    <div className="w-full h-screen bg-white flex flex-col justify-center items-center">      
      <div className="absolute left-0 top-0"><ThreeBarMenu/></div>
      <div className="w-[95%] h-[90%] rounded-xl" ref={mapRef}>
      </div>
    </div>
  )
}
