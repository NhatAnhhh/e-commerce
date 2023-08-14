import React from 'react';
import styled from 'styled-components';
const StyledMainTitleSmall = styled.div`
  color: #000;
  font-family: Oswald;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  margin-top: 28px;
  margin-bottom: 10px;
`;

export const TitleSmall = ({ text }) => {
  return <StyledMainTitleSmall>{text}</StyledMainTitleSmall>;
};
