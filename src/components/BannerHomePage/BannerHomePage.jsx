import React from 'react';
import { styled } from 'styled-components';
import { Button } from '../Button';
import { LocaleFormatter } from '@/locales';
const ParentContainer = styled.div`
  height: 467px;
  display: flex;
  position: relative;
  flex-direction: row-reverse;
`;

const TitleCover = styled.div`
  /* width: 1312px; */
  left: 0%;
  top: 0%;
  left: 0%;
  position: absolute;

  &::before {
    content: '';
    width: 639px;
    height: 100px;
    border-top: ${props => props.border};
    border-right: ${props => props.border};
    position: absolute;
    left: 23%;
    top: 20%;
  }

  @media screen and (max-width: 1500px) {
    &::before {
      display: none;
    }
  }
`;

const ChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.widthimg}%;
`;
const TitleContainer = styled.div`
  flex: 1;
  height: 467px;
  width: 72.27%;
  background: ${props => props.bgcolor};
  /* background: linear-gradient(90deg, #ddebf1 0%, #d3e5ee 42.71%, #c8deec 69.27%, rgba(255, 255, 255, 0) 100%); */
  position: absolute;

  left: 0%;
  button {
    margin-left: 19.81%;
    width: 175px;
    height: 56px;
    border: ${props => props.border};
    /* border: 2px solid #000; */
    color: ${props => props.color};
    text-align: center;
    /* Oswald Medium 18 AA */
    background-color: transparent;
    font-size: 18px;
    font-family: Oswald;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  @media screen and (max-width: 1820px) {
    &::before {
      right: 29%;
    }
  }

  @media screen and (max-width: 1670px) {
    &::before {
      right: 20%;
      top: 10%;
    }
  }

  @media screen and (max-width: 1321px) {
    button {
      transform: translateY(50px);
    }
  }
  @media screen and (max-width: 1452px) {
    &::before {
      display: none;
    }
  }
`;

const ImageContainer = styled.div`
  flex: 2;
  height: 467px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-image: url(${props => props.backgroundimage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const TitleText = styled.div`
  margin-bottom: 10px;
  /* color: #000; */
  color: ${props => props.color};
  font-size: 56px;
  font-family: Oswald;
  font-style: normal;
  font-weight: 500;
  line-height: 72px;
  text-transform: uppercase;
  margin-top: 11.59%;
  margin-left: 19.81%;
  transform: translateY(-50%);

  @media screen and (max-width: 1321px) {
    transform: translateY(10%);
  }
`;

const SubtitleText = styled.div`
  margin-bottom: 10px;
  color: ${props => props.color};
  font-size: 25px;
  font-family: Oswald;
  font-style: normal;
  font-weight: 400;
  line-height: 37px;
  letter-spacing: 0.25px;
  width: 48%;
  margin-left: 19.81%;
  transform: translateY(-20%);
  @media screen and (max-width: 1321px) {
    display: none;
  }
`;

export const BannerHomePage = ({ title, subtitle, backgroundimage, widthimg, bgcolor, color, border }) => {
  return (
    <ParentContainer>
      <ChildContainer widthimg={widthimg}>
        <ImageContainer backgroundimage={backgroundimage}></ImageContainer>
      </ChildContainer>

      <TitleContainer bgcolor={bgcolor} color={color} border={border}>
        <TitleCover color={color} border={border}>
          <TitleText color={color}>{title}</TitleText>

          <SubtitleText color={color}>{subtitle}</SubtitleText>
          <button>
            <LocaleFormatter id="app.home.shopNow" />
          </button>
        </TitleCover>
      </TitleContainer>
    </ParentContainer>
  );
};
