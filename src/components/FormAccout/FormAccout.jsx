import React from 'react';
import CustomForm from './CustomForm';
import { styled } from 'styled-components';
import { Form, message } from 'antd';
import { useSelector } from 'react-redux';
import userService from '@/services/userService';

const inputs = [
  {
    label: 'New password',
    name: 'password',
    borderradius: '0px',
    rules: [{ required: true, message: 'Please enter your password' }],
  },
  {
    label: 'Confirm password',
    dependencies: true,
    name: 'confirm',
    borderradius: '0px',
    rules: [
      { required: true, message: 'Please enter your confirm password' },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
          }
          return Promise.reject(new Error('The new password that you entered do not match!'));
        },
      }),
    ],
  },
];

// const checkboxes = [
//   { label: 'Change Email', name: 'ChangeEmail' },
//   { label: 'Change Password', name: 'ChangePassword' },
// ];

const Title = styled.div`
  color: #000;
  font-family: Oswald;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 68px;
`;

export const FormAccout = () => {
  return (
    <>
      <Title>Account Information</Title>
      <CustomForm inputs={inputs} />
    </>
  );
};
