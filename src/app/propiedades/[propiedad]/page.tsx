"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Mapa from '@/app/mapa/page';
import ThreeBarMenu from '@/app/threeBarMenu';

export default function Propiedad({ params }: { params: { Propiedad: string } }) {
  const nroProp = `/${params.Propiedad}.jpg`;

  return (
    <div className="w-full h-screen bg-white flex flex-col justify-center items-center">
      <div className='absolute left-0 top-0'><ThreeBarMenu/></div>
      <div className="w-40 h-auto flex justify-center items-center absolute top-0">
        <Link href="/inicio">
          <Image
            className='place-content-center'
            src="/SerPatagonia.jpg"
            alt="Ser de la Patagonia"
            layout="responsive"
            width={700}
            height={500}
          /> 
        </Link>
      </div>
      <div className='text-black w-full h-full flex justify-center items-center'>
        <Image
          className='place-content-center'
          src={nroProp} 
          alt={`Imagen de ${params.Propiedad}`}
          width={70}
          height={50}
        />
      </div>
      <div className='w-[50%] h-[100%] shadow-md flex items-center m-10 rounded-md overflow-hidden'>
        <Mapa/>
      </div>
    </div>  
  )
}