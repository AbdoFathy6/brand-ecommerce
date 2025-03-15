import React, { Suspense, useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/common/Error';
import AuthPage from './pages/Form/AuthForm';
import PrivateRoute from './PrivateRoute';
import './App.css';
import Spinner from './components/common/Spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = React.lazy(() => import('./pages/Home/Home'));
const Products = React.lazy(() => import('./pages/ProductList/Product'));
const ProductDetails = React.lazy(() => import('./pages/ProductDetails/Productdetails'));
const Checkout = React.lazy(() => import('./pages/Checkout/CheckOut'));
const ProductGrid = React.lazy(() => import('./pages/ProductGrid/Product'));
const Cart = React.lazy(() => import('./pages/Cart/Cart'));

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userName, setUserName] = useState('');


  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const user = JSON.parse(localStorage.getItem('user'));
    if (isAuthenticated && user) {
      setIsSignedIn(true);
      setUserName(user.name);
    }
  }, []);

  const handleSignIn = (name) => {
    setIsSignedIn(true);
    setUserName(name);
    localStorage.setItem('isAuthenticated', true);
  };


  return (
    <RouterProvider router={createBrowserRouter([
      {
        path: '/',
        element: <AuthPage onSignIn={handleSignIn} setUserName={setUserName} />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/home',
        element: (
          <PrivateRoute>
            <Suspense fallback={<Spinner animation="border" variant="secondary" className='Loading' />}>
              <Home userName={userName} isSignedIn={isSignedIn} />
            </Suspense>
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: '/products',
        element: (
          <Suspense fallback={<Spinner animation="border" variant="secondary" className='Loading' />}>
            <Products />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: '/productgrid',
        element: (
          <Suspense fallback={<Spinner animation="border" variant="secondary" className='Loading' />}>
            <ProductGrid />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: '/products/:id',
        element: (
          <Suspense fallback={<Spinner animation="border" variant="secondary" className='Loading ' />}>
            <ProductDetails />
            <ToastContainer />

          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: '/checkout',
        element: (
          <Suspense fallback={<Spinner animation="border" variant="secondary" className='Loading container' />}>
            <Checkout userName={userName} isSignedIn={isSignedIn} />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: '/cart',
        element: (
          <Suspense fallback={<Spinner animation="border" variant="secondary" className='Loading' />}>
            <Cart />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
    ])
    }
    />
  )


};

export default App;
