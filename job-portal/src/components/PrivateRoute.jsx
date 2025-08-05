// src/components/PrivateRoute.jsx
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ requiredRole }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // User not logged in
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.role !== requiredRole) {
    // User does not have the required role, redirect to home
    return <Navigate to="/" />;
  }
    
  // User is authenticated and has the required role (or no role is required)
  return <Outlet />;
};

export default PrivateRoute;