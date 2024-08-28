// pages/index.js
"use client";
import React from 'react';
import Image from 'next/image';
import ThreeBarMenu from './threeBarMenu';

export default function Home() {
  return (
    <div>
      <main>
        <div className="w-full h-screen bg-slate-500">
          <div className="bg-white ">
            <ThreeBarMenu/>
            </div>
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
      </main>
    </div>
  );
}
