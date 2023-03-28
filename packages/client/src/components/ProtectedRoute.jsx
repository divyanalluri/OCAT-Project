import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Navigate to="/user/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
