import React from "react";
import Navbar from "./features/navbar/Navbar";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Protected from "./features/auth/components/Protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <Protected>
      <Home /> 
    </Protected>,
  },

  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/cart",
    element: 
    <Protected>
      <CartPage />
    </Protected>
    ,
  },
  {
    path: "/checkout",
    element: 
    <Protected>
      <CheckoutPage />
    </Protected>
    ,
  },
  {
    path: "/product-detail/:id",
    element: 
    <Protected>
      <ProductDetailPage />
    </Protected>
    ,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      <Navbar />
      <Route />
    </RouterProvider>
  );
};

export default App;
