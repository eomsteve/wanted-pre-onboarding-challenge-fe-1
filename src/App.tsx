import React from 'react';
import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom';
import { UserPage } from './pages/auth/UserAuth';
import { TodoPage } from './pages/TodoList/TodoList';
import { isLoggedIn } from './modules/API/axiosUtils';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn() ? (
          <Route path="/" element={<TodoPage />} />
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
