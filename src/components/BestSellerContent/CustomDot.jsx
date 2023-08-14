import React from 'react';
import styled from 'styled-components';

const StyledCustomDot = styled.div`
  display: flex;

  ul {
    display: flex;
    align-items: center;
    gap: 0 15px;
    /* transform: translateY(100%); */
    transform: translateX(-10%);
  }

  button {
    font-size: 0;
    background-color: #dde0e4;
    width: 30px;
    height: 30px;
    border-radius: 100rem;
    transition: all 0.2s linear;
  }
  .slick-active button {
    border-radius: 100rem;
    background-color: #1e2832;
    width: 40px;
  }
  @media screen and (max-width: 768px) {
    ul {
      gap: 0px;
    }
  }
`;

export const CustomDot = dots => {
  return (
    <StyledCustomDot>
      <ul> {dots} </ul>
    </StyledCustomDot>
  );
};
