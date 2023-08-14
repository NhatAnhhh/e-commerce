import React from 'react';
import styled from 'styled-components';
import IconTitle from '@/assets/img/shop/iconfiltershop.svg';

const StyledTitleFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .name-title {
    color: #000;

    font-family: Oswald;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 68px;
  }
`;

export const TitleFilter = ({ titleName }) => {
  return (
    <StyledTitleFilter>
      <div className="name-title">{titleName}</div>
      <div className="icon-title-filter">
        <img src={IconTitle} alt="icon-filter" />
      </div>
    </StyledTitleFilter>
  );
};
