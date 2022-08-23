import { FC } from 'react';
import { AuthCardList } from '@components/AuthCardList';
import { AuthCardProps } from '@components/AuthCardList/interfaces';
import rightImageSrc from '../../images/signUpPersonalInfo.png';

export const SignUpContainer: FC = () => {
  const authCardsDataList: AuthCardProps[] = [
    {
      title: 'Title 1',
      description:
        'Lorem Ipsum is simply dummy text of the printing and  industry.',
      rightImageSrc: rightImageSrc,
    },
    {
      title: 'Title 2',
      description:
        'Lorem Ipsum is simply dummy text of the printing and  industry.',
      rightImageSrc: rightImageSrc,
    },
    {
      title: 'Title 3',
      description:
        'Lorem Ipsum is simply dummy text of the printing and  industry. Test data test',
      rightImageSrc: rightImageSrc,
    },
    {
      title: 'Title 4',
      description:
        'Lorem Ipsum is simply dummy text of the printing and  industry.',
      rightImageSrc: rightImageSrc,
    },
    {
      title: 'Title 5',
      description:
        'Lorem Ipsum is simply dummy text of the printing and  industry.',
      rightImageSrc: rightImageSrc,
    },
  ];
  return (
    <div>
      <AuthCardList cardsListData={authCardsDataList} />
    </div>
  );
};

// idea: карточки https://www.creative-tim.com/blog/web-development/free-tailwind-css-templates-resources/
// подсветка карточки после заполнения
// модальное окно при открытии карточки сдвумя блоками поля + картинка
