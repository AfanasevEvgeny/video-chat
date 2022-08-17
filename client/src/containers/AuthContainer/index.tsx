import { FC } from 'react';
import { Outlet } from 'react-router-dom';

/**
 * Контейнер, отвечающий за отображение логина/регистрации
 * */
export const AuthContainer: FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
