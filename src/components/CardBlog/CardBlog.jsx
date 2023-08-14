import React from 'react';
import styled from 'styled-components';

const StyledMainCardBlog = styled.div`
  flex-basis: 23%;
  height: 420px;
  background: #fff;

  position: relative;
  @media screen and (max-width: 1250px) {
    flex-basis: 100%;
  }
`;

const Title = styled.div`
  display: flex;
  /* width: 355.385px; */
  height: 22px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  color: var(--gray-4, #bdbdbd);
  font-family: Oswald;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
`;

const TitleContent = styled.p`
  display: flex;
  /* width: 405.723px; */
  height: 62px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  color: #000;
  font-family: Oswald;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Content = styled.p`
  display: flex;
  /* width: 398.676px; */
  height: 124px;
  flex-direction: column;
  flex-shrink: 0;

  color: #000;
  font-family: Oswald;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.16px;
`;

const FooterBlog = styled.p`
  display: flex;
  width: 90%;
  height: 36px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  border-top: 4px #000 solid;

  color: var(--gray-2, #4f4f4f);
  font-family: Oswald;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: 37px;

  position: absolute;
  bottom: 0%;
`;

const Cover = styled.div`
  margin-top: 24px;
  margin-left: 24.16px;
  margin-right: 24.16px;
`;

export const CardBlog = ({ title, titlecontent, content, footerblog }) => {
  return (
    <StyledMainCardBlog>
      <Cover>
        <Title>{title}</Title>
        <TitleContent>{titlecontent}</TitleContent>
        <Content>{content}</Content>
        <FooterBlog>{footerblog}</FooterBlog>
      </Cover>
    </StyledMainCardBlog>
  );
};
