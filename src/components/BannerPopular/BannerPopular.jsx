import React from 'react';
import styled from 'styled-components';
import imgTop from '@/assets/img/bannerPopular/top.png';
import imgBot from '@/assets/img/bannerPopular/bot.png';
import imgRight from '@/assets/img/bannerPopular/right.png';
import { LocaleFormatter } from '@/locales';
import { ContentBannerPopular } from './ContentBannerPopular';

const StyledBanner = styled.div`
  margin-top: 30px;
  .banner {
    display: flex;
    flex-direction: row;
    gap: 0px 29px;
  }
  .banner-left {
    width: 50%;
    height: 898px;
    display: flex;
    flex-direction: column;
    gap: 30px 0px;
  }
  .banner-top {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    background: linear-gradient(90deg, rgba(241, 239, 240, 0) 0%, #f1f0f0 -30.06%, #f3f0ef 100%);

    position: relative;
  }
  .banner-bot {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    background-image: linear-gradient(90deg, #f7e0d5 0%, #f3dcd2 83.85%, rgba(243, 220, 210, 1.14) 100%);

    position: relative;
  }
  .banner-top-left {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .banner-title-right {
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 82px;

    color: #000;
    font-family: Oswald;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 62px;
    text-transform: uppercase;
  }
  .banner-paragraph-right {
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 7px;
    padding-right: 64px;

    color: #000;
    font-family: Oswald;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 37px;
    letter-spacing: 0.22px;
  }
  .banner-btn-right {
    padding: 19px 42px 19px 42px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: #000 2px solid;
    //fonts
    color: #000;
    text-align: center;

    font-family: Oswald;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  .banner-bot-left {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .banner-title-left {
    color: #000;
    font-family: Oswald;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 62px;
    text-transform: uppercase;
  }
  .banner-paragraph-left {
    color: #000;
    font-family: Oswald;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 37px;
    letter-spacing: 0.22px;
  }
  .banner-btn-left {
    padding: 19px 42px 19px 42px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: #000 2px solid;
    //fonts
    color: #000;
    text-align: center;
    /* Oswald Medium 18 AA */
    font-family: Oswald;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  .banner-right {
    width: 50%;
    height: 898px;
    background: linear-gradient(90deg, #e0ded3 0%, #e0ddd5 86.82%, #e0ddd5 100%);
    display: flex;
    align-items: center;
    /* display: none; */
    position: relative;
  }
  .banner-right-right {
    img {
      position: absolute;
      object-fit: cover;
      right: 0;
      bottom: 0;
      height: 100%;
    }
  }
  .banner-right-left {
    margin-left: 50px;
    transform: translateY(20%);
  }

  .banner-top-left {
    img {
      position: absolute;
      left: 0;
      height: 100%;

      object-fit: cover;
      bottom: 0;
    }
  }

  .banner-bot-right {
    img {
      position: absolute;
      right: 0;
      height: 100%;

      object-fit: cover;
      bottom: 0;
    }
  }
  .banner-right-fake {
    width: 100%;
    height: 898px;
    background: linear-gradient(90deg, #e0ded3 0%, #e0ddd5 86.82%, #e0ddd5 100%);
    display: flex;
    align-items: center;
    display: none;
    position: relative;
  }
  .banner-top-right {
    display: flex;

    align-items: center;
  }
  .banner-bot-left {
    display: flex;
    align-items: center;
  }
  @media only screen and (max-width: 500px) {
    .banner {
      display: none;
    }
  }

  @media only screen and (max-width: 1420px) {
    .banner-right {
      display: none;
    }
    .banner-right-fake {
      display: block;
      /* background-position: right top;
      background-size: contain; */
      height: 100%;
    }
    .banner-right-left {
      margin-left: 40px;
    }
    .banner {
      flex-direction: column;
    }
    .banner-left {
      width: 100%;
      height: 1600px;
    }
    .banner-top {
      height: 70%;
    }

    .banner-bot {
      height: 70%;
    }
    .repon {
      width: 225px;
      font-size: 60px;
    }
  }
`;

export const BannerPopular = () => {
  return (
    <StyledBanner>
      <div className="banner">
        <div className="banner-left">
          <div className="banner-top">
            <div className="banner-top-left">
              <img src={imgTop} alt="img-top" />
            </div>
            <div className="banner-top-right">
              <ContentBannerPopular
                fztitle="48px"
                widthtitle="221px"
                title={<LocaleFormatter id='app.home.chooseLook' />}
                desc={<LocaleFormatter id='app.home.seeCollect' />}
                textbutton={<LocaleFormatter id='app.home.seeOffer' />}
              />
            </div>
          </div>
          <div className="banner-right-fake">
            <div className="banner-right-left">
              <ContentBannerPopular
                className="repon"
                fztitle="96px"
                title={<LocaleFormatter id='app.home.saleUp' />}
                widthtitle="357px"
                desc={<LocaleFormatter id='app.home.specialOffer' />}
                textbutton={<LocaleFormatter id='app.home.shopNow' />}
              />
            </div>
            <div className="banner-right-right">
              <img src={imgRight} alt="img-right" />
            </div>
          </div>
          <div className="banner-bot">
            <div className="banner-bot-left">
              <ContentBannerPopular
                fztitle="48px"
                widthtitle="221px"
                title={<LocaleFormatter id='app.home.brandNew' />}
                desc={<LocaleFormatter id='app.home.popularBrand' />}
                textbutton={<LocaleFormatter id='app.home.seeOffer' />}
              />
            </div>
            <div className="banner-bot-right">
              <img src={imgBot} alt="img-bot" />
            </div>
          </div>
        </div>
        <div className="banner-right">
          <div className="banner-right-left">
            <ContentBannerPopular
              fztitle="96px"
              title={<LocaleFormatter id='app.home.saleUp' />}
              widthtitle="357px"
              desc={<LocaleFormatter id='app.home.specialOffer' />}
              textbutton={<LocaleFormatter id='app.home.shopNow' />}
            />
          </div>
          <div className="banner-right-right">
            <img src={imgRight} alt="img-right" />
          </div>
        </div>
      </div>
    </StyledBanner>
  );
};
