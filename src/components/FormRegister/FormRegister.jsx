import React, { useState } from 'react';
import { Button, Checkbox, DatePicker, Form, Input, message, notification } from 'antd';
import styled from 'styled-components';
import bubble from '@/assets/img/bubble.png';
import { HomeTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { formatDate } from '@/utils/formatDate';
import { useDispatch } from 'react-redux';
import { actRegisterAsync } from '@/redux/auth/authAction';

const StyledMainFormLogin = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 436;
  transform: translateY(-2%);

  align-items: center;
  .text-checkbox {
    span {
      font-size: 20px;
      font-family: Inter;
      font-style: normal;
      font-weight: 400;
      line-height: 175%;
      color: #8a92a6;
    }
  }

  .top-sign-in {
    text-align: center;
  }

  .ant-form-item .ant-form-item-label {
    padding: 0;
  }
  .forget {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .login-form-forgot {
    font-size: 20px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: 175%;
    color: #000000;
  }
  .top {
    text-align: center;
  }
  .top-desc {
    font-size: 16px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: 175%;
    color: #8a92a6;
  }
  .top-sign-in {
    color: #000;
    font-size: 40px;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
  }
  .top-brand {
    transform: translateY(-100%);
    color: black;
    font-weight: 700;
    font-size: 3rem;
    letter-spacing: 5px;
    position: relative;
    font-style: italic;
  }
  .top-brand:before,
  .top-brand:after {
    content: '';
    position: absolute;
    top: -2.3rem;
    left: 9rem;
    border-radius: 50%;
    width: 9rem;
    height: 9rem;
  }
  .top-brand:before {
    z-index: 5;
    border: 3px dashed rgb(17, 188, 254);
    border-left: 3px solid transparent;
    border-bottom: 3px solid transparent;
    -webkit-animation: dashed 1s linear infinite;
    animation: dashed 1s linear infinite;
  }
  .top-brand:after {
    z-index: 10;
    border: 3px solid var(--blue);
    border-left: 3px solid transparent;
    border-bottom: 3px solid transparent;
    -webkit-animation: dashed 1s ease infinite;
    animation: dashed 1s ease infinite;
  }
  @keyframes dashed {
    to {
      transform: rotate(360deg);
    }
  }
  .bubbles img {
    width: 50px;
    animation: bubble 7s linear infinite;
  }
  .bubbles {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    bottom: 0;
    z-index: -10000;
  }

  @keyframes bubble {
    0% {
      transform: translateY(0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: translateY(-80vh);
      opacity: 0;
    }
  }

  .bubbles img:nth-child(1) {
    animation-delay: 2s;
  }
  .bubbles img:nth-child(2) {
    animation-delay: 1s;
  }
  .bubbles img:nth-child(3) {
    animation-delay: 3s;
  }
  .bubbles img:nth-child(4) {
    animation-delay: 4.5s;
  }
  .bubbles img:nth-child(5) {
    animation-delay: 3s;
  }
  .bubbles img:nth-child(6) {
    animation-delay: 6s;
  }
  .bubbles img:nth-child(7) {
    animation-delay: 7s;
  }
  .login-form-button {
    width: 270px;
    height: 50px;
    margin-top: 24px;
    background-color: black;
    text-align: center;
    font-size: 20px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: 175%;
    font-family: Oswald;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  .login-form-button:hover {
    background-color: black;
  }

  .other-account {
    font-size: 20px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: 175%;
    color: #232d42;
  }
  .login-auth2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
  }
  .sign-up {
    color: #232d42;
    margin-top: 13px;
    /* H6 16px Regular Inter */
    font-size: 20px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: 175%;
    z-index: 2;
  }
  .sign-up-text {
    color: #0ea5e9;
    cursor: pointer;
  }
  .go-back {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .go-back-icon {
    svg {
      width: 30px;
      height: 30px;
    }

    cursor: pointer;
  }
`;

dayjs.extend(customParseFormat);

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

export const FormRegister = () => {
  const navigate = useNavigate();

  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();

  const handleClickGoBack = () => {
    navigate('/');
  };

  const handleOnFinish = async values => {
    const dateFormat = formatDate(values.birthday.$d);

    dispatch(actRegisterAsync(values.name, dateFormat, values.email, values.password)).then(res => {
      if (res && res.error) {
        notification.error({
          message: 'Error',
          description: res.message,
        });
      }
    });
  };
  return (
    <StyledMainFormLogin>
      <Form
        layout="vertical"
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        size="large"
        style={{
          width: 436,
        }}
        onFinish={handleOnFinish}
      >
        <div className="top">
          <div className="top-brand">
            IS<span className="sign-up-text">W</span>
          </div>
          <div className="top-sign-in">Personal Information</div>
        </div>
        <Form.Item
          name="name"
          label="Username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="birthday"
          label="Birthday"
          rules={[
            {
              required: true,
              message: 'Please input your birthday!',
            },
          ]}
        >
          <DatePicker style={{ width: '100%' }} format={dateFormatList} />
        </Form.Item>
        <div className="forget">
          <Checkbox className="text-checkbox">Sign Up for Newsletter</Checkbox>
        </div>
        <div className="top-sign-in">Sign Up for Newsletter</div>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <div className="go-back">
          <Form.Item>
            <Button loading={isSubmit} type="primary" htmlType="submit" className="login-form-button">
              Create an account
            </Button>
          </Form.Item>
          <HomeTwoTone twoToneColor="black" className="go-back-icon" onClick={handleClickGoBack} />
        </div>
      </Form>
      <div className="bubbles">
        <img src={bubble} alt="bubble" />
        <img src={bubble} alt="bubble" />
        <img src={bubble} alt="bubble" />
        <img src={bubble} alt="bubble" />
        <img src={bubble} alt="bubble" />
        <img src={bubble} alt="bubble" />
        <img src={bubble} alt="bubble" />
        <img src={bubble} alt="bubble" />
      </div>
    </StyledMainFormLogin>
  );
};
