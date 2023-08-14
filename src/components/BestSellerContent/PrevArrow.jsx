import React from 'react';
import styled from 'styled-components';

const StyledWrapperPrev = styled.button`
  /* border: 1px solid #c1dcdc; */
  background-color: #1e2832;
  color: #000000;
  right: 80px;
  font-size: 22px;
  color: #c1dcdc;
  position: absolute;
  bottom: -80px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  right: 0;
  i {
    color: white;
  }
`;

export const PrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <StyledWrapperPrev onClick={onClick}>
      <i className="fa-solid fa-arrow-left"></i>
    </StyledWrapperPrev>
  );
};
