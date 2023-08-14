import React, { useState } from 'react';
import { Button, Steps, message, theme } from 'antd';
import { PageShipping } from './PageShipping';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import paymentService from '@/services/paymentService';
import { useNavigate } from 'react-router-dom';
import { paymentAsyncDirect, paymentAsyncOnline } from '@/redux/payment/paymentAction';
import { actDeleteAsyncAllCarts } from '@/redux/order/orderAction';

const ComponentCheck = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [inputPayment, setInputPayment] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser } = useSelector(state => state.auth);

  const formRef = React.useRef(null);

  const handleChange = e => {
    setInputPayment(e.target.value);
  };

  const Page1 = (
    <PageShipping currentUser={currentUser} form={formRef} handleChange={handleChange} inputPayment={inputPayment} />
  );

  const steps = [
    {
      title: 'Shipping & Payments',
      content: Page1,
    },
    {
      title: 'Success',
    },
  ];
  const next = async () => {
    if (inputPayment === 1) {
      const res = await formRef.current.validateFields();
      await dispatch(
        paymentAsyncDirect({
          customerAddress: res.address,
          customerName: currentUser.name,
          customerPhone: `${res.prefix}${res.phone}`,
          customerEmail: currentUser.email,
          userID: currentUser.userId,
        }),
      );
      await dispatch(actDeleteAsyncAllCarts());
      message.success('Order successfull');
      navigate('/checkout/successdirect');
    } else {
      const res = await formRef.current.validateFields();
      const result = await dispatch(
        paymentAsyncOnline({
          customerAddress: res.address,
          customerName: currentUser.name,
          customerPhone: `${res.prefix}${res.phone}`,
          customerEmail: currentUser.email,
          userID: 1,
        }),
      );
      window.location.href = result;
      await dispatch(actDeleteAsyncAllCarts());
    }
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map(item => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
    display: 'flex',
    flexDirection: 'column',
  };

  const buttonStyle = {
    left: '10%',
    marginBottom: '10%',
    width: '120px',
    height: '50px',
  };

  const PrevStyle = {
    color: ' var(--gray-1, #828282)',
    textAlign: 'right',
    fontFamily: 'Oswald',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    top: '515px',
    right: '52%',
    position: 'absolute',
  };
  return (
    <>
      <Steps current={current} items={items} />

      <div
        style={{
          marginTop: 60,
        }}
      >
        <div style={contentStyle}>
          {steps[current].content}
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()} style={buttonStyle}>
              Next
            </Button>
          )}

          {current > 0 && (
            <Button style={PrevStyle} onClick={() => prev()}>
              BACK
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
export default ComponentCheck;
