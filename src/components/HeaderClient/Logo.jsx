import React from 'react';
import styled from 'styled-components';

const StyledMainLogo = styled.div`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-family: Oswald;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 9px 48px;
  border: 1px solid #fff;
  font-style: italic;

  /* @media screen and (max-width: 1321px) {
    transform: translateX(40px);
  } */
`;
export const Logo = () => {
  return <StyledMainLogo>ISW</StyledMainLogo>;
};
