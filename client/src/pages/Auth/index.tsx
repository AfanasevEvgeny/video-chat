import { AuthContainer } from '@containers/AuthContainer';
import { PageRoute } from '@pages/interfaces';
import { SignInContainer } from '@containers/SignInContainer';
import { SignUpContainer } from '@containers/SignUpContainer';

/** Страница регистрации и логина */
const rootRoute: PageRoute = {
  path: 'auth/*',
  element: <AuthContainer />,
  private: false,
  children: [
    {
      path: 'signIn',
      element: <SignInContainer />,
      private: false,
    },
    {
      path: 'signUp',
      element: <SignUpContainer />,
      private: false,
    },
  ],
};

export default rootRoute;
