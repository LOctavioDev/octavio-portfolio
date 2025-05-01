'use client';

import { useState } from 'react';
import { BaseInfo } from '@/Data/data';
import { FaDownload } from 'react-icons/fa';
import Image from 'next/image';

export default function Hero() {
  const [isAnimated, setIsAnimated] = useState(false);

  const toggleImage = () => {
    setIsAnimated(!isAnimated);
  };

  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-2xl md:text-4xl mb-9 text-gray-200 font-semibold">
              Hola, soy {BaseInfo.name}
            </h1>
            <p className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4.5rem] leading-[4rem] text-white">
              {BaseInfo.position}
            </p>
            <p className="mt-6 text-gray-400 text-sm md:text-base text-opacity-70">
              {BaseInfo.description}
            </p>
            <button className="mt-8 px-8 py-3 text-blue-700 font-semibold sm:text-base text-sm bg-white hover:bg-blue-900 transition-all hover:text-white duration-300 rounded-lg flex items-center space-x-2">
              <span>Descargar CV</span> <FaDownload />
            </button>
          </div>
          <div
            className="mx-auto hidden lg:block rounded-[3rem] border-[4px] border-blue-800 bg-[#0f0715] overflow-hidden cursor-pointer"
            onClick={toggleImage}
          >
            <Image
              src={isAnimated ? BaseInfo.profilePicAnimated : BaseInfo.profilePic}
              alt={BaseInfo.name}
              width={500}
              height={500}
              className={`transition-transform duration-200 ${
                isAnimated ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
