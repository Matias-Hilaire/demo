"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ThreeBarMenu from "../threeBarMenu";

export default function Inicio() { 

  return (
    <div className="bg-white relative">
      <div className="absolute left-0 top-0">
        <ThreeBarMenu />
      </div>
      
      <main className="w-full h-screen bg-white flex flex-col items-center justify-center">
        {/* Logo principal */}
        <div className="mb-10">
          <Link href="/inicio">
            <Image
              className="cursor-pointer"
              src="/SerPatagonia.jpg"
              alt="Ser de la Patagonia"
              layout="responsive"
              width={300}
              height={200} 
            />
          </Link>
        </div>

        <div className="w-[60%] p-10 rounded-lg shadow-2xl flex flex-col items-center">
          <h1 className="text-black text-center font-bold text-2xl mb-8">
            PROPIEDADES MÁS VISTAS
          </h1>

          <div className="grid grid-cols-2 gap-8">
            <Link href="/propiedades/casa2">
              <Image
                className="rounded-lg cursor-pointer"
                src="/casa2.jpg"
                alt="Casa 2"
                layout="responsive"
                width={300}
                height={200}
              />
            </Link>

            <Link href="/propiedades/casa3">
              <Image
                className="rounded-lg cursor-pointer"
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
