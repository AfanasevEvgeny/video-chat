import { PageRoute } from '@pages/interfaces';
import { DashboardContainer } from '@containers/DashboardContainer';

/** Страница дашборда пользователя */
const rootRoute: PageRoute = {
  path: 'dashboard',
  element: <DashboardContainer />,
  private: false,
  routes: [],
};

export default rootRoute;
