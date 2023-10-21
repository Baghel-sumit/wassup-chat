import React, { useState } from 'react';
import Login from './login';
import Signup from './signup';

const Auth = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);
  return (
    <>
      {isLoginActive ? (
        <Login goToSignUp={()=> setIsLoginActive(false)} />
      ): (
        <Signup goToLogin={()=> setIsLoginActive(true)} />
      )}
    </>
  )
}

export default Auth
