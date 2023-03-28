import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export const Logout = () => {
  useEffect(() => {
    Cookies.remove(`isLoggedIn`);
  });
  return <Navigate to="/user/login" replace />;
};
