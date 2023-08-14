import React from 'react';
import styled from 'styled-components';
const StyledMainFreeShip = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  .t {
    display: inline-block;
    color: #828282;
    font-family: Oswald;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 68px; /* 566.667% */
    text-transform: uppercase;
  }
  .free-ship {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export const Freeship = () => {
  return (
    <StyledMainFreeShip>
      <div className="free-ship">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M1 3L6 8L13 1" stroke="#828282" stroke-width="2.4" />
          </svg>
        </span>
        <span className="t">Free ship</span>
      </div>
      <div className="t">Product code: RFKK1024</div>
      <div className="t">TAGS: NEW arrivals</div>
    </StyledMainFreeShip>
  );
};
