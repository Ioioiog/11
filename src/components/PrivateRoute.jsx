import React from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, type = 'tenant' }) {
  const isAuthenticated = localStorage.getItem(`${type}LoggedIn`) === 'true';
  return isAuthenticated ? children : <Navigate to={`/${type}/login`} />;
}
