// pages/index.js
"use client";
import React from 'react';
import Image from 'next/image';
import ThreeBarMenu from '../threeBarMenu';

export default function Home() {
  return (
    <div>
      <main>
        <div className="w-full h-screen bg-slate-500">
          <ThreeBarMenu/>
            <div className="w-auto h-auto flex justify-center items-center absolute top-0 left-1/2 transform -translate-x-1/2">
              <div className="w-28 h-auto">
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
        </div>
      </main>
    </div>
  );
}
