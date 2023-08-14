import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CloseSquareTwoTone } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { deleteAsyncInCarts } from '@/redux/order/orderAction';
import styled from 'styled-components';
import { formatMoney } from '@/utils/formatMoney';

const StyledColorPopover = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => props.color};
`;

export const ContentPopover = ({ carts }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickViewCarts = () => {
    navigate('/shoppingcart');
  };

  const handleDeleteInCarts = item => {
    dispatch(deleteAsyncInCarts(item.productID, item.sizeID, item.colorID));
  };

  return (
    <div className="pop-cart-body">
      <div className="pop-cart-content">
        {carts.map(item => {
          return (
            <div key={item.productID} className="product">
              <img src={item.image} />
              <div className="content">
                <div className="title">{item.productName}</div>
                <div className="size">
                  <span>SIZE:</span> {item.size.name}
                </div>
                <div className="art">
                  <span> Art.No.:</span> {item.productID}
                </div>
                <div className="color-product">
                  <div className="span1"> COLOR:</div>
                  <StyledColorPopover color={item.color.name}></StyledColorPopover>
                </div>
                <div className="price">
                  Quantity: {item.quantity} | TotalPrice: {formatMoney(item.totalPrice)}
                </div>
              </div>
              <div className="action">
                <CloseSquareTwoTone onClick={() => handleDeleteInCarts(item)} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="pop-cart-footer" onClick={handleClickViewCarts}>
        <div></div>
        <Button>View Carts</Button>
      </div>
    </div>
  );
};
