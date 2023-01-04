import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { UserPage } from './pages/auth/UserAuth';
import { TodoPage } from './pages/TodoList/TodoList';
const router = createBrowserRouter([
  {
    path: '/',
    element : <TodoPage/>
  },
  {
    path: '/auth',
    element: <UserPage/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
