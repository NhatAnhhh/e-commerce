import React from 'react';
import { styled } from 'styled-components';
import bannerBlog from '@/assets/img/banner/BannerBlog.svg';
import { LocaleFormatter } from '@/locales';
import img1 from '@/assets/img/banner/background-zara.svg';

const Title = styled.p`
  display: flex;
  width: 66.13%;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  background-color: white;

  color: #000;
  text-align: center;
  font-family: Oswald;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 68px;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 48px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 36px;
  }
`;

export const BannerBlogPage = () => {
  const BannerContainer = styled.div`
    background-image: url(${img1});
    width: 100%;
    height: 478px;
    flex-shrink: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <BannerContainer>
      <Title>
        <LocaleFormatter id="app.blog.slogan" />
      </Title>
    </BannerContainer>
  );
};
