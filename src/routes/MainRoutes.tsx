import { lazy } from 'react';

// project import
import MainLayout from '@fruity/layout/MainLayout';
import CommonLayout from '@fruity/layout/CommonLayout';
import Loadable from '@fruity/components/Loadable';
import AuthGuard from '@fruity/utils/route-guard/AuthGuard';

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        
      ]
    },
    {
      path: '/',
      element: <CommonLayout layout="simple" />,
      children: [
      ]
    }
  ]
};

export default MainRoutes;
