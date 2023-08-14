import React from 'react';
import styled from 'styled-components';

const StyledWrapperNext = styled.button`
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
  i {
    color: white;
  }
`;

export const NextArrow = props => {
  const { className, style, onClick } = props;

  return (
    <StyledWrapperNext onClick={onClick} type="button">
      <i className="fa-solid fa-arrow-right"></i>
    </StyledWrapperNext>
  );
};
