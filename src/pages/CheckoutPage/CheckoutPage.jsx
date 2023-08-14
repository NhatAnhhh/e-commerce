import { CheckOutPage } from '@/components/CheckOutPage';
import React from 'react';
import styled from 'styled-components';

const StyledMainCheckOut = styled.div`
  padding-bottom: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 114.66px;
  height: auto;
`;

export const CheckoutPage = () => {
  return (
    <StyledMainCheckOut>
      <CheckOutPage></CheckOutPage>
    </StyledMainCheckOut>
  );
};
