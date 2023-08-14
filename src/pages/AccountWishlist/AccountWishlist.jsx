import React from 'react';
import { CartWishlist } from './CartWishlist';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const AccountWishlist = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div>
      <CartWishlist />
    </div>
  );
};

export default AccountWishlist;
