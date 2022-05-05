// TOOLS
import { useAuth0 } from '@auth0/auth0-react';
// ROUTER
import { Routes, Route } from 'react-router-dom';
// PAGES
import Home from './Home';
import Products from './Products';
import ProductDetails from './ProductDetails';
import Orders from './Orders';
import Profile from './Profile';
import Checkout from './Checkout';

const pagesData = [
  {
    path: '/orders',
    component: <Orders />,
    authentication_required: true
  },
  {
    path: '/basket',
    component: <h1>Basket Page</h1>,
    authentication_required: true
  },
  {
    path: '/product/:id',
    component: <ProductDetails />,
    authentication_required: false
  },
  {
    path: '/profile',
    component: <Profile />,
    authentication_required: true
  },
  {
    path: '/products',
    component: <Products />,
    authentication_required: false
  },
  {
    path: '/checkout',
    component: <Checkout />,
    authentication_required: false
  },
  {
    path: '/',
    component: <Home />,
    authentication_required: false
  }
];

const PageRoutes = () => {
  const { isAuthenticated } = useAuth0();

  // Pages that do not need authentication
  const noAuthRequired = pagesData.filter(
    page => !page.authentication_required
  );

  // Check if user is authenticated, if so return only non authenticated pages
  const authRoutesLogic = isAuthenticated ? pagesData : noAuthRequired;

  // Return routes depending on authentication
  const displayedRoutes = authRoutesLogic.map(page => {
    const { path, component } = page;

    return <Route path={path} element={component} key={path} />;
  });

  return <Routes>{displayedRoutes}</Routes>;
};

export default PageRoutes;
