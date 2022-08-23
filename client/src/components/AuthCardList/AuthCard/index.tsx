import { FC } from 'react';
import { AuthCardProps } from '../interfaces';

export const AuthCard: FC<AuthCardProps> = ({
  title,
  description,
  rightImageSrc,
}) => {
  return (
    <div className='grid grid-cols-6 gap-4 p-5 max-w-sm border border-slate-600 rounded-xl'>
      <div className='col-span-2 flex items-center'>
        <img src={rightImageSrc} alt='sample Image' />
      </div>
      <div className='col-span-4'>
        <span className='text-xl font-medium text-slate-300'>{title}</span>
        <div className='text-slate-500 text-sm pt-3'>{description}</div>
      </div>
    </div>
  );
};
