import Image from 'next/image';
import { HiBars3BottomRight } from 'react-icons/hi2';
import Link from 'next/link';
import { navLinks } from '@/constant/constant';
import { CgClose } from 'react-icons/cg';

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

export default function MobileNav({ showNav, closeNav }: Props) {
  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]';
  // const navTransition = showNav ? 'transition-all duration-300' : 'transition-none';

  return (
    <div>
      <div
        className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[10000] bg-black opacity-50 w-full h-screen`}
      ></div>
      <div
        className={`text-white ${navOpen} transform transition-all duration-400 delay-200 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-y-8 z-[10000]
      `}
      >
        {navLinks.map((link) => {
          return (
            <Link
              href={link.url}
              key={link.id}
            >
              <p className="nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]">
                {link.label}
              </p>
            </Link>
          );
        })}

        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 w-6 h-6 text-white cursor-pointer"

        />
      </div>
    </div>
  );
}
