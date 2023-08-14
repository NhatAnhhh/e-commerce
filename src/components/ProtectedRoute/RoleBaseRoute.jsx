import React from 'react';
import { useSelector } from 'react-redux';
import { NotPermitted } from './NotPermitted';

export const RoleBaseRoute = props => {
  const isAdminRoute = window.location.pathname.startsWith('/admin');
  const user = useSelector(state => state.auth.currentUser);

  const userRole = user && user.role;
  return <>{isAdminRoute && userRole === 'ROLE_ADMIN' ? <>{props.children}</> : <NotPermitted />}</>;
};
