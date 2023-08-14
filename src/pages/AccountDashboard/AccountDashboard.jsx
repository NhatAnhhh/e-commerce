import { Dashboard } from '@/components/FormDashboard/Dashboard';
import React from 'react';

import { useSelector } from 'react-redux';

const AccountDashboard = () => {
  const { currentUser } = useSelector(state => state.auth);

  return (
    <>
      <Dashboard currentUser={currentUser}></Dashboard>
    </>
  );
};

export default AccountDashboard;
