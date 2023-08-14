import React from 'react';
import styled from 'styled-components';

const StyledMainBrand = styled.div`
  width: 235px;
  height: 141px;
  /* padding: 40px 60px; */
  background-color: red;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  transition: all 0.25s linear;
  &:hover {
    background-color: #f0f2f2;
  }
  .box {
    font-size: 38px;
    font-family: Oswald;
    font-style: normal;
    font-weight: 500;
    color: black;

    text-transform: uppercase;
  }
`;

export const BrandHeader = ({ text }) => {
  return (
    <StyledMainBrand>
      <div className="box">{text}</div>
    </StyledMainBrand>
  );
};
