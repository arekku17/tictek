import React, { useEffect } from 'react';
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

import ReactGA from 'react-ga';
const TRACKING_ID = process.env.TRACKING_ID ; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);



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

const AppRouter = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppRouter/>
);

