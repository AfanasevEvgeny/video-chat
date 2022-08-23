import { FC } from 'react';
import { HeaderProps } from '@components/AuthLayout/Header/interfaces';

export const Header: FC<HeaderProps> = ({ navArea }) => {
  return (
    <header className='p-4 flex items-center justify-between'>
      <span className='text-2xl font-bold text-slate-200'>Company logo</span>
      <div className='h-max flex divide-x'>{navArea}</div>
    </header>
  );
};
