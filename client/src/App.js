import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Chat from './Containers/Chat';
import Login from './Containers/Auth/login';
import Signup from './Containers/Auth/signup';
import ShowChat from './Containers/Chat/showChats';
import AuthHandler from './Components/authHandler';

const App = () => {
  return (
    <BrowserRouter>
      <AuthHandler />
      <Routes>
        <Route path='/auth'>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='*' element={<Navigate to='auth/login' />} />
        </Route>
        <Route path='/chat' element={<Chat />} />
        <Route path='/' element={<ShowChat />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
