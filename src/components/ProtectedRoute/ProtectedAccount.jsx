import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const ProtectedAccount = props => {
  const isAuthenticated = useSelector(state => Boolean(state.auth.token));
  return <>{isAuthenticated ? <>{props.children}</> : <Navigate to="/login" replace />}</>;
};
