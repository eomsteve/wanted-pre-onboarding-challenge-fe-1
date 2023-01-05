import React from 'react';
import { BrowserRouter, Routes, Route, redirect,Outlet } from 'react-router-dom';
import { UserPage } from './pages/auth/UserAuth';
import { TodoPage } from './pages/TodoList/TodoList';
import { TodoDetail } from './pages/TodoList/TodoDetail';
import { isLoggedIn } from './modules/API/axiosUtils';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn() ? (
          <Route path="/" element={<TodoPage />}>
            <Route path=":id" element={<TodoDetail />}></Route>
          </Route>
        ) : (
          <>
            <Route path="/" element={<TodoPage />} />
            <Route path="/auth" element={<UserPage />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
