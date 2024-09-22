"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThreeBarMenu from '../threeBarMenu';

export default function Inicio() {
  return (
    <div className="bg-white">
      <div className='absolute left-0 top-0'><ThreeBarMenu/></div>
      <main className="w-full h-screen bg-white flex justify-center items-center">
        <div className="w-40 h-auto flex justify-center absolute top-0 ">
        <Link href="/inicio">
          <Image
            className='place-content-center'
            src="/SerPatagonia.jpg"
            alt="Ser de la Patagonia"
            layout="responsive"
            width={700}
            height={500}/> 
          </Link>
        </div>
        <div className=''>
          <h1 className='text-black flex justify-center m-11'>Propiedades mas vistas</h1>

          <Link href="/propiedades/casa2">
          <Image 
            className='place content-center'
            src="/casa2.jpg"
            alt='casa'
            layout='responsive'
            width={70}
            height={50}/>
          </Link>
          <Link href="/propiedades/casa3">
          <Image 
            className='place content-center'
            src="/casa3.jpg"
            alt='casa'
            layout='responsive'
            width={70}
            height={50}/>
          </Link>
        </div>
      </main>
    </div>
  );
}
