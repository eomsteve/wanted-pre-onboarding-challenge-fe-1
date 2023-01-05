import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserPage } from './pages/auth/UserAuth';
import { TodoPage } from './pages/TodoList/TodoList';

function App() {
  const isLogin = !!localStorage.getItem('loginToken');

  return (
    <BrowserRouter>
      <Routes>
        {isLogin ? (
          <Route path="/" element={<TodoPage />} />
        ) : (
          <Route path="/auth" element={<UserPage />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
