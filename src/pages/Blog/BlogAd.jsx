import React from 'react';
import { styled } from 'styled-components';
import advertise1 from '@/assets/img/banner/advertise1.svg';
import advertise2 from '@/assets/img/banner/advertise2.svg';
const StyledBlogAd = styled.div`
  padding-top: 52px;
  display: flex;
  flex-direction: column;
  gap: 23px 0;
  @media (max-width: 1000px) {
    display: none;
  }
`;
export const BlogAd = () => {
  return (
    <StyledBlogAd>
      <img className="ad1" src={advertise1} alt="advertise" />
      <img className="ad2" src={advertise2} alt="advertise" />
    </StyledBlogAd>
  );
};
