import React from 'react';
import { styled } from 'styled-components';
import ComponentCheck from './ComponetCheck';
const CheckOutPageStyle = styled.div`
  width: 100%;
  height: auto;
  padding-top: 140px;
  .ant-steps.ant-steps-horizontal{
    width: 64%;
    padding-left: 35%;
  }
`;

const steps = [
  {
    title: 'First',
    content: 'First-content',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];

export const CheckOutPage = () => {
  const items = steps.map(item => ({
    key: item.title,
    title: item.title,
  }));
  return (
    <>
      <CheckOutPageStyle>
        <ComponentCheck></ComponentCheck>
      </CheckOutPageStyle>
    </>
  );
};
