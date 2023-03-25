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

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Header />
      <App />
    </>
  },
  {
    path: "/boletos",
    element: <>
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

