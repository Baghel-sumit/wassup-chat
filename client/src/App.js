import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Chat from './Containers/Chat';
import Login from './Containers/Auth/login';
import Signup from './Containers/Auth/signup';
import ShowChat from './Containers/Chat/showChats';

const App = () => {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth'>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='*' element={<Navigate to='auth/login' />} />
        </Route>
        <Route path='/chat' element={<Chat />} />
        <Route path='/showChat' element={<ShowChat />} />
        <Route path='*' element={<Navigate to='auth/login' />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
