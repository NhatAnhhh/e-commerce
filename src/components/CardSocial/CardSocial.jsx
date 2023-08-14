import { InstagramOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';
const StyledMainCardSocial = styled.div`
  width: ${props => props.width};
  height: ${props => `${props.height}px`};
  position: relative;

  &:hover::before {
    visibility: visible;
    opacity: 1;
  }

  &:hover .img-bottom {
    visibility: visible;
    opacity: 1;
  }
  &::before {
    content: '';
    position: absolute;
    background: rgba(0, 0, 0, 0.5);

    width: 100%;
    height: 100%;
    visibility: hidden;
    opacity: 0;
    transition: all 0.25s linear;
  }
  .img-bottom {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    visibility: hidden;
    opacity: 0;
    svg {
      width: 50px;
      height: 50px;
      color: white;
    }
  }
`;

export const CardSocial = ({ width, height, src }) => {
  return (
    <StyledMainCardSocial width={width} height={height}>
      <div className="img-bottom">
        <InstagramOutlined />
      </div>
      <img src={src} alt="name" />
    </StyledMainCardSocial>
  );
};
