import { FC } from 'react';
import { AuthCard } from '@components/AuthCardList/AuthCard';
import { AuthCardListProps } from '@components/AuthCardList/interfaces';

export const AuthCardList: FC<AuthCardListProps> = ({ cardsListData }) => {
  return (
    <div className='flex flex-wrap justify-around gap-4'>
      {cardsListData.map((card) => (
        <AuthCard {...card} key={card.title} />
      ))}
    </div>
  );
};
