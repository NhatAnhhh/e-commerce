import React from 'react';
import styled from 'styled-components';
const StyledMainTitleAccountPage = styled.div`
  color: #000;
  text-align: center;
  font-family: Oswald;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 68px;
  margin-bottom: 20px;
`;

export const TitleAccountPage = ({ text }) => {
  return <StyledMainTitleAccountPage>{text}</StyledMainTitleAccountPage>;
};
