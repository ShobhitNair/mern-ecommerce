import React from 'react'
import Navbar from './features/navbar/Navbar'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

const router = createBrowserRouter([
    {

      path: "/",
      element: <Home/>,
    },
  
      {
        path: "/signup",
        element: <SignUpPage/>,
      },
      {
          path: "/login",
          element: <LoginPage/>,
        },
        {
          path: '/cart',
          element: <CartPage/>
        },
        {
          path: '/checkout',
          element: <CheckoutPage/>
        }
]);


const App = () => {
  return (
    <RouterProvider router={router}>
    <Navbar />
    <Route />
  </RouterProvider>
  )
}

export default App