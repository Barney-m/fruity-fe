import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// project import
import CommonLayout from '@fruity/layout/CommonLayout';
import Loadable from '@fruity/components/Loadable';
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';

// render - landing page
const Landing = Loadable(lazy(() => import('@fruity/pages/landing')));
const AboutUs = Loadable(lazy(() => import('@fruity/pages/landing')));

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([
    {
      path: '/',
      element: <CommonLayout layout="simple" />,
      children: [
        {
          path: '/',
          element: <Landing />
        },
        {
          path: '/about-us',
          element: <AboutUs />
        }
      ]
    },
    LoginRoutes,
    MainRoutes
  ]);
}
