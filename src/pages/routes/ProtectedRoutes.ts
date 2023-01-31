import React, { FC,useEffect } from 'react';
import { isLoggedIn } from '../../API/axiosUtils';
import { Navigate, useNavigate } from 'react-router-dom';

interface ProtectedRouter {
  children: React.ReactElement;
}

export const ProtectedRoute: FC<ProtectedRouter> = ({ children }) => {
  const navigate = useNavigate();
  useEffect(()=>{
    if (isLoggedIn()){
      navigate('/auth');
    }
  },[])
  return children;
};
