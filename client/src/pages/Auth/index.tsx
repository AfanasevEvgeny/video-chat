import { AuthContainer } from '@containers/AuthContainer';
import { PageRoute } from '@pages/interfaces';
import { SignInContainer } from '@containers/SignInContainer';
import { SignUpContainer } from '@containers/SignUpContainer';

/** Страница регистрации и логина */
const rootRoute: PageRoute = {
  path: 'auth/*',
  element: <AuthContainer />,
  private: false,
  routes: [
    {
      path: 'signIn',
      element: <SignInContainer />,
      private: false,
      routes: [],
    },
    {
      path: 'signUp',
      element: <SignUpContainer />,
      private: false,
      routes: [],
    },
  ],
};

export default rootRoute;
