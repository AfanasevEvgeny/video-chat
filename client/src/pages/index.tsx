import AuthRoute from '@pages/Auth';
import DashboardRoute from '@pages/Dashboard';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

const rootRoutes = [AuthRoute, DashboardRoute];

const RouteHandler: FC = () => {
  return (
    <Routes>
      {rootRoutes.map((route) => (
        <Route {...route} key={route.path}>
          {route.routes &&
            route.routes.map((nestedRoute) => (
              <Route {...nestedRoute} key={nestedRoute.path} />
            ))}
        </Route>
      ))}
    </Routes>
  );
};
export default RouteHandler;

// const PrivateRoute = ({ children }) => {
//   const authed = isauth() // isauth() returns true or false based on localStorage
//
//   return authed ? children : <Navigate to="/Home" />;
// }
