import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const AuthHandler = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  
  useEffect(()=> {
    const handleAuth = () => {
      const token = localStorage?.token;
      if (!token) {
        navigate('/auth');
      }
    }
    handleAuth();
  },[pathname, navigate]);

  return (
    <></>
  )
}

export default AuthHandler
