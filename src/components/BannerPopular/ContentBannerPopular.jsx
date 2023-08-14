import React from 'react';
import styled from 'styled-components';

const StyledContentBannerPopular = styled.div`
  .desc {
    color: #000;
    font-family: Oswald;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 37px;
    letter-spacing: 0.22px;
    margin-top: 7px;
    margin-bottom: 51px;
  }
  button {
    width: 175px;
    height: 56px;
    border: 2px solid #000;
    color: #000;
    text-align: center;
    background-color: transparent;
    font-size: 18px;
    font-family: Oswald;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
`;

const StyledContentBannerTitle = styled.div`
  color: #000;
  font-family: Oswald;
  font-size: ${props => props.fztitle};
  font-style: normal;
  font-weight: 600;

  text-transform: uppercase;
  width: ${props => props.widthtitle};
`;

export const ContentBannerPopular = ({ className, title, desc, textbutton, fztitle, widthtitle }) => {
  return (
    <StyledContentBannerPopular className={className}>
      <StyledContentBannerTitle className={className} widthtitle={widthtitle} fztitle={fztitle}>
        {title}
      </StyledContentBannerTitle>
      <div className="desc">{desc}</div>
      <button>{textbutton}</button>
    </StyledContentBannerPopular>
  );
};
