import { actDeleteAsyncAllCarts } from '@/redux/order/orderAction';
import paymentService from '@/services/paymentService';
import { Button, Result } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Steps } from 'antd';

const StyledMainSuccess = styled.div`
  padding-top: 138px;
  font-size: 100px;
  .ant-steps.ant-steps-horizontal {
    width: 64%;
    padding-left: 35%;
  }
`;

const steps = [
  {
    title: 'Shipping & Payments',
  },
  {
    title: 'Success',
  },
];

export const CheckoutSucess = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = steps.map(item => ({
    key: item.title,
    title: item.title,
  }));

  const handleClickOk = async () => {
    const params = new URLSearchParams(location.search.split('?')[1]);
    await paymentService.addLinkVNPay({
      string: params.toString(),
    });
    navigate('/');
  };

  return (
    <StyledMainSuccess>
      <Steps items={items} current={1} />

      <Result
        status="success"
        title="Successfully "
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
          <Button onClick={handleClickOk} key="buy">
            Buy Again
          </Button>,
        ]}
      />
    </StyledMainSuccess>
  );
};
