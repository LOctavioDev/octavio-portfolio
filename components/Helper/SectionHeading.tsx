import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function SectionHeading({ children }: Props) {
  return (
    <h1 className='bg-blue-800 w-fit text-center px-4 py-3 mx-auto text-white text-2xl'>{children}</h1>
  )

}
