import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './components/App';
import Header from './components/Header';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Comprar from './components/Comprar';
import ScrollToTop from './components/ScrollToTop';

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <ScrollToTop />
      <Header />
      <App />
    </>
  },
  {
    path: "/boletos",
    element: <>
      <ScrollToTop />
      <Comprar />
    </>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

