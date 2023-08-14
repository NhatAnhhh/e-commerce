import React, { useState } from 'react';

import { Button, Checkbox, Form, Input, message, notification } from 'antd';
import styled from 'styled-components';

import bubble from '@/assets/img/bubble.png';
import gmailImg from '@/assets/img/login/Gmail.svg';
import instagramImg from '@/assets/img/login/Instagram.svg';
import facebookImg from '@/assets/img/login/Facebook.svg';
import linkedinImg from '@/assets/img/login/Linkedin.svg';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HomeTwoTone } from '@ant-design/icons';

import { actLogionAsync } from '@/redux/auth/authAction';

const StyledMainFormLogin = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 436;
  transform: translateY(-2%);
  text-align: center;

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
    width: 200px;
    height: 50px;
    margin-top: 24px;
    background-color: #eb5757;
    text-align: center;
    font-size: 20px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: 175%;
  }
  .login-form-button:hover {
    background-color: #eb5757;
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
  }
  .go-back-icon {
    font-size: 30px;
  }
`;

export const FormLogin = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickSignUp = () => {
    navigate('/register');
  };
  const handleClickGoBack = () => {
    navigate('/');
  };

  const handleOnFinish = values => {
    const { email, password } = values;
    setLoading(true);
    dispatch(actLogionAsync(email, password)).then(res => {
      if (res.success) {
        // navigate('/');
      } else {
        notification.error({
          message: 'Error',
          description: res.message,
        });
      }
    });
    setLoading(false);
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
          <div className="top-sign-in">Sign In</div>
          <div className="top-desc">Sign in to stay connected.</div>
        </div>
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
        <div className="forget">
          <Checkbox className="text-checkbox">Remember me?</Checkbox>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </div>
        <Form.Item>
          <Button loading={loading} type="primary" htmlType="submit" className="login-form-button">
            Sign in
          </Button>
        </Form.Item>
        <div className="other-account">or sign in with other accounts?</div>
        <div className="login-auth2">
          <div>
            <img src={gmailImg} alt="gmail" />
          </div>
          <div>
            <img src={facebookImg} alt="facebook" />
          </div>
          <div>
            <img src={instagramImg} alt="insta" />
          </div>
          <div>
            <img src={linkedinImg} alt="linkedin" />
          </div>
        </div>

        <div className="sign-up">
          Don’t have an account?
          <span className="sign-up-text" onClick={handleClickSignUp}>
            Click here to sign up.
          </span>
        </div>
        <div className="go-back">
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
