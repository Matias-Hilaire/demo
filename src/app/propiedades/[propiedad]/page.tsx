"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ThreeBarMenu from '@/app/threeBarMenu';

export default function Propiedad({ params }: { params: { Propiedad: string } }) {
  const router = useRouter();

  return (
    <div>
      <h1>{params.Propiedad}</h1>
      <main>
        <div className="w-full h-screen bg-white">
        <div className='absolute left-0 top-0'><ThreeBarMenu/></div>
        <div className="w-40 h-auto flex justify-center items-center absolute top-0 left-1/2 transform -translate-x-1/2">
              <Image
                className='place-content-center'
                src="/SerPatagonia.jpg"
                alt="Ser de la Patagonia"
                layout="responsive"
                width={700}
                height={500}
              />
            </div>
        </div>
    </main>
  </div>
  );
}
