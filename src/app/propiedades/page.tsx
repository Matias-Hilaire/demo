"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThreeBarMenu from '../threeBarMenu';

export default function Propiedades() {

  return (
    <div>
      <main>
        <div className="w-full h-screen bg-white flex justify-center items-center">
          <div className='absolute left-0 top-0'><ThreeBarMenu/></div>
        <div className="w-40 h-auto flex justify-center items-center absolute top-0">
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
      <div className="w-80 flex justify-center items-center space-x-8">
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
    </div>
  </main>
</div>
  );
}
