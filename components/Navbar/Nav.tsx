'use client';

import { useEffect, useState } from 'react';
import { navLinks } from '@/constant/constant';
import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props = {
  openNav: () => void;
};

export default function Nav({ openNav }: Props) {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };

    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return (
    <div className={`fixed ${navBg ? 'bg-[#240b39]' : 'fixed'} has-[12vh] z-[10] w-full transition-all duration-400`}>
      <div className="flex items-center h-full justify-between w-[90%] sm:w-[80%] mx-auto">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={170}
          height={170}
          className="ml-[1.5rem] sm:ml-0"
        />
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => {
              return (
                <Link
                  href={link.url}
                  key={link.id}
                >
                  <p className="nav__link">{link.label}</p>
                </Link>
              );
            })}
          </div>
          <div className="flex items-center space-x-5">
            <button className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-300 rounded-lg">
              Contactarme
            </button>
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-white lg:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
