import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Chat from './Containers/Chat';
import ShowChat from './Containers/Chat';
import AuthHandler from './Components/authHandler';
import Auth from './Containers/Auth';

const App = () => {
  return (
    <BrowserRouter>
      <AuthHandler />
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/' element={<ShowChat />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
