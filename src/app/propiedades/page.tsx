"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThreeBarMenu from '../threeBarMenu';

export default function Propiedades() {
  return (
    <div>
      <main>
        <div className="w-full h-screen bg-white">
          <ThreeBarMenu/>
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
          <div className="w-80 h-auto">
          <Link href="/propiedades/casa2">
            <Image 
              className='place content-center'
              src="/casa2.jpg"
              alt='casa'
              layout='responsive'
              width={70}
              height={50}/>
            </Link>
            <Image 
              className='place content-center'
              src="/casa3.jpg"
              alt='casa'
              layout='responsive'
              width={70}
              height={50}/>
          </div>
        </div>
      </main>
    </div>
  );
}
