import React from 'react';
import { styled } from 'styled-components';
import { ItemCart } from './ItemCart';
import imgProduct from '@/assets/img/wishlist/item.svg';
import { useSelector } from 'react-redux';

const StyledCartWishlist = styled.div`
  display: flex;
  gap: 100px 63px;
  flex-wrap: wrap;
  width: 120%;
`;
export const CartWishlist = () => {
  const wishLists = useSelector(state => state.wishlist.wishLists);

  return (
    <StyledCartWishlist>
      {wishLists.length > 0 ? (
        wishLists.map((item, idx) => {
          return (
            <ItemCart
              key={idx}
              sizes={item.sizes}
              src={item.listImage[0].path}
              title={item.name}
              price={item.price}
              quantity="1"
              id={item.id}
            />
          );
        })
      ) : (
        <div className="no-product">There are no products in the wishlist</div>
      )}
    </StyledCartWishlist>
  );
};
