import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes } from './Router/router.jsx';
import { AppProvider } from './contexts/AuthContext.jsx';


const route = createBrowserRouter([
...Routes
])


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={route} />
    </AppProvider>
  </StrictMode>
);