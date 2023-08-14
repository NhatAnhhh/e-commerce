import React from 'react';
import styled from 'styled-components';
import bannerPlus from '@/assets/img/banner2/bannerPlus.svg';
import vector from '@/assets/img/banner2/Vector.svg';
import { LocaleFormatter } from '@/locales';
const StyledBannerPlus = styled.div`
  /* height: 200px; */
  margin-top: 30px;
  .banner-plus {
    display: flex;
    justify-content: space-around;
    gap: 0px 96px;
  }
  .banner-plus-left {
    width: 1060px;
    height: 363px;
    background-image: url('${bannerPlus}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* display: flex;
    justify-content: center;
    align-items: center; */
  }
  .banner-plus-right {
    position: relative;
  }
  .banner-plus-right::before {
    content: '';
    width: 626px;
    height: 141.5px;
    border-top: 2px solid #000000;
    border-right: 2px solid #000000;
    position: absolute;
    right: -49px;
  }
  .banner-plus-content {
    display: none;
  }
  .banner-plus-title {
    color: black;
    margin-top: 0px;
    padding-top: 21px;
    ///fonts
    font-size: 56px;
    font-family: Oswald;
    font-style: normal;
    font-weight: 500;
    line-height: 72px;
    text-transform: uppercase;
  }
  .banner-plus-content {
    display: none;
    text-align: center;
    font-family: Oswald;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.1px;
  }
  .banner-plus-shop {
    color: black;
    margin-top: 141px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 175px;
    height: 56px;
    border: 2px solid;
    //font
    font-size: 18px;
    font-family: Oswald;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 500px) {
    .banner-plus-left {
      position: relative;
      display: flex;
      justify-content: center;
    }
    .banner-plus-content {
      display: unset;
      margin: 209px 18px 12px 18px;
      width: 268px;
      height: 139px;
      border: 2px solid var(--divider, #c4c4c4);
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .title {
      color: #000;
      text-align: center;
      font-size: 14px;
      font-family: Oswald;
      font-style: normal;
      font-weight: 500;
      line-height: 19px;
      text-transform: uppercase;
    }
    .content {
      margin-top: 10px;
      margin-bottom: 15px;
      color: #000;
      text-align: center;
      font-size: 10px;
      font-family: Oswald;
      font-style: normal;
      font-weight: 400;
      line-height: 13px;
      letter-spacing: 0.1px;
    }
    .shop {
      margin-left: 91px;
      border: 2px solid;
      display: flex;
      width: 85.083px;
      height: 32px;
      flex-direction: column;
      justify-content: center;
      color: #000;
      text-align: center;
      font-size: 10px;
      font-family: Oswald;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
    .banner-plus-right {
      display: none;
    }
  }
  @media only screen and (max-width: 1721px) {
    .banner-plus-right::before {
      display: none;
    }
  }
`;

export const BannerPlus = () => {
  return (
    <StyledBannerPlus>
      <div className="container1">
        <div className="banner-plus">
          <div className="banner-plus-left">
            <div className="banner-plus-content">
              <p className="title"><LocaleFormatter id='app.home.explorerYou'/></p>
              <p className="content">
              <LocaleFormatter id='app.home.bannerHomePage'/>
              </p>
              <p className="shop"><LocaleFormatter id='app.home.shopNow'/></p>
            </div>
          </div>
          <div className="banner-plus-right">
            <p className="banner-plus-title"><LocaleFormatter id='app.home.explorerYou'/></p>
            <p className="banner-plus-shop"><LocaleFormatter id='app.home.shopNow'/></p>
          </div>
        </div>
      </div>
    </StyledBannerPlus>
  );
};
