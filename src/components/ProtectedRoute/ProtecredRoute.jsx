import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RoleBaseRoute } from './RoleBaseRoute';

export const ProtecredRoute = props => {
  const isAuthenticated = useSelector(state => Boolean(state.auth.token));

  return (
    <>
      {isAuthenticated ? (
        <>
          <RoleBaseRoute>{props.children}</RoleBaseRoute>
        </>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  );
};
