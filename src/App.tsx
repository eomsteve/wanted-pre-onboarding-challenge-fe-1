import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { LoginPage } from './pages/auth/login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
