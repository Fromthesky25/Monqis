import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Catalog} from './modules/Catalog';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/men',
    Component: () => <Catalog gender='men' />
  },
  {
    path: '/women',
    Component: () => <Catalog gender='women' />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
