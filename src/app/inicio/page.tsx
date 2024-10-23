"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ThreeBarMenu from "../threeBarMenu";

export default function Inicio() { 
//TURSO_CONNECTION_URL=libsql://ser-de-la-patagonia-matias-hilaire.turso.io
//TURSO_AUTH_TOKEN=eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3Mjc0NzU0MDIsImlkIjoiZjI0ZTc3NjUtNTJiYi00YTFkLWFhODktNTI0NWFkOWUwNTY5In0.AFTU3ZnUfXIC4k7_HAtZSMZyf0dwcb7OoveW4Ze5sbqRrgaRCINOjqBIUQcFcOYjG0NgmEJlRkI8vNQNqmazDg
//NEXT_PUBLIC_MAPS_API_KEY=AIzaSyCEjaQxWE68iLH7p2j5A4gGGPcRplKTk70
  return (
    <div className="bg-gradient-to-b from-white to-gray-300 relative">
      <div className="absolute left-0 top-0">
        <ThreeBarMenu />
      </div>

      <main className="w-full h-screen flex flex-col items-center">
        <div className="mb-10">
          <Link href="/inicio">
            <Image
              className="cursor-pointer"
              src="/SerPatagonia.png"
              alt="Ser de la Patagonia"
              layout="responsive"
              width={300}
              height={200}
            />
          </Link>
        </div>

        <div className="w-[70%] p-10 bg-white  rounded-2xl shadow-xl backdrop-blur-md flex flex-col items-center">
          <h1 className="text-black text-center text-3xl mb-8">
            Propiedades Mas Vistas
          </h1>

          <div className="grid grid-cols-2 gap-8">
            <Link href="/propiedades/casa2">
              <Image
                className="rounded-2xl transition-transform duration-300 hover:scale-105"
                src="/casa2.jpg"
                alt="Casa 2"
                layout="responsive"
                width={300}
                height={200}
              />
            </Link>

            <Link href="/propiedades/casa3">
              <Image
                className="rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105"
                src="/casa3.jpg"
                alt="Casa 3"
                layout="responsive"
                width={300}
                height={200}
              />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
