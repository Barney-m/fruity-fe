import { lazy } from 'react';

// project import
import Loadable from '@fruity/components/Loadable';
import CommonLayout from '@fruity/layout/CommonLayout';

// render - landing page
const Home = Loadable(lazy(() => import('@fruity/pages/home')));
const AboutUs = Loadable(lazy(() => import('@fruity/pages/about-us')));

// render - e-commerce
const MainStore = Loadable(lazy(() => import('@fruity/pages/e-commerce')));
const ProductDetails = Loadable(lazy(() => import('@fruity/pages/e-commerce/product-details')));
const Checkout = Loadable(lazy(() => import('@fruity/pages/e-commerce/checkout')));

// ==============================|| Public ROUTING ||============================== //

const PublicRoutes = {
  path: '/',
  element: <CommonLayout layout="simple" />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'about-us',
      element: <AboutUs />
    },
    {
      path: 'store',
      element: <MainStore />
    },
    {
      path: 'store/fruit/:id',
      element: <ProductDetails />
    },
    {
      path: 'store/checkout',
      element: <Checkout />
    }
  ]
};

export default PublicRoutes;
