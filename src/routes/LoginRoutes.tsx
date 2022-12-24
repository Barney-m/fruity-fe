import { lazy } from 'react';

// project import
import GuestGuard from '@fruity/utils/route-guard/GuestGuard';
import CommonLayout from '@fruity/layout/CommonLayout';
import Loadable from '@fruity/components/Loadable';

// render - login
const AuthLogin = Loadable(lazy(() => import('@fruity/pages/auth/login')));
const AuthRegister = Loadable(lazy(() => import('@fruity/pages/auth/register')));
const AuthForgotPassword = Loadable(lazy(() => import('@fruity/pages/auth/forgot-password')));
const AuthCheckMail = Loadable(lazy(() => import('@fruity/pages/auth/check-mail')));
const AuthResetPassword = Loadable(lazy(() => import('@fruity/pages/auth/reset-password')));
const AuthCodeVerification = Loadable(lazy(() => import('@fruity/pages/auth/code-verification')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <GuestGuard>
          <CommonLayout />
        </GuestGuard>
      ),
      children: [
        {
          path: 'login',
          element: <AuthLogin />
        },
        {
          path: 'register',
          element: <AuthRegister />
        },
        {
          path: 'forgot-password',
          element: <AuthForgotPassword />
        },
        {
          path: 'check-mail',
          element: <AuthCheckMail />
        },
        {
          path: 'reset-password',
          element: <AuthResetPassword />
        },
        {
          path: 'code-verification',
          element: <AuthCodeVerification />
        }
      ]
    }
  ]
};

export default LoginRoutes;
