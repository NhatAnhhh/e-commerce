import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import homeBanner1 from '@/assets/img/header/home-banner1.svg';
import { BrandHeader } from '@/components/BrandHeader';
import { BannerPlus } from '@/components/BannerPlus';
import { Button } from '@/components/Button';
import { ContentBanner } from '@/components/ContentBanner';
import { BannerHomePage } from '@/components/BannerHomePage';
import Social from '@/components/Social/Social';
import { MainTitle } from '@/components/MainTitle';
import { BestSellerMain } from '@/components/BestSellerContent';
import { BlogHome } from '@/components/BlogHome';
import { ProductHomePage } from '@/components/ProductHomePage';
import { BannerPopular } from '@/components/BannerPopular';
import { Widget } from '@/components/Widget';
import { useDispatch } from 'react-redux';
import img1 from '@/assets/img/header/home-banner1.svg';
import img2 from '@/assets/img/8773603.jpg';
import img3 from '@/assets/img/swd15.jpg';
import img4 from '@/assets/img/banner/bannerHomePage.svg';

import { useEffect } from 'react';
import { fetchAsyncAllProductsHome } from '@/redux/product/productAction';
import { LocaleFormatter } from '@/locales';
import { Helmet } from 'react-helmet';

export const Home = () => {
  const StyledMainHome = styled.div`
    padding-top: 114.66px;

    .home-banner {
      height: 900px;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .carousel.carousel-slider {
      z-index: 2;
    }

    .homeBanner1 {
      background-image: url(${img1});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

    .homeBanner2 {
      background-image: url(${img2});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

    .homeBanner3 {
      background-image: url(${img3});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

    .carousel .control-dots .dot {
      width: 20px;
      height: 20px;
      border: 1px solid #000000;
      background-color: #000000;
    }

    .content {
      margin-top: 30px;
    }
    .c {
      margin-top: 42px;
      border: 2px solid #c4c4c4;
      position: relative;
    }
    .lay-out {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      /* display: grid;
    grid-template-columns: repeat(auto-fill, minmax(235px, auto)); */
      gap: 20px;
      padding: 29px 11px;
    }
    .t {
      position: absolute;
      left: 50%;
      width: 500px;
      height: 45px;
      transform: translateX(-50%);
      color: #000;
      text-align: center;
      top: -36px;
      font-size: 24px;
      font-family: Oswald;
      font-style: normal;
      font-weight: 400;
      line-height: 68px;
      text-transform: uppercase;
      background-color: white;
    }
    .a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .a-sale {
      color: #000;
      font-size: 86px;
      font-family: Oswald;
      font-style: normal;
      font-weight: 600;
      line-height: 96px;
      text-transform: uppercase;
      width: 504px;

      position: relative;
    }
    .a-sale button {
      width: 175px;
      height: 56px;
      border: 2px solid #000;
      color: #000;
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

    .a-sale::before {
      content: '';
      width: 496px;
      height: 100px;
      border-top: 2px solid #000000;
      border-right: 2px solid #000000;
      position: absolute;
      right: -20px;
      top: -46px;
    }
    .b {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .img2 {
      transform: translateX(-10%);
    }
    .p {
      margin-top: 30px;
    }
    .BannerHomePage {
      margin-top: 30px;
    }
    @media screen and (max-width: 768px) {
      .t {
        width: 250px;
      }
    }

    @media screen and (max-width: 1321px) {
      .home-banner {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        gap: 30px;
      }
      .a-sale {
        width: 300px;
      }
      .b {
        transform: translateX(2%);
      }
      .img1 {
        img {
          width: 350px;
        }
      }
      .img2 {
        img {
          width: 350px;
        }
      }
      .a-sale::before {
        display: none;
      }
    }
  `;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncAllProductsHome());
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <div className="container1">
        <StyledMainHome>
          <div className="content">
            <Carousel showArrows={false} showThumbs={false} showStatus={false}>
              <div className="home-banner homeBanner1">
                <ContentBanner />
              </div>
              <div className="home-banner homeBanner2">
                <ContentBanner />
              </div>
              <div className="home-banner homeBanner3">
                <ContentBanner />
              </div>
            </Carousel>
          </div>
          <div className="c">
            <div className="t">
              <LocaleFormatter id="app.home.chooseBrand" />
            </div>
            <div className="lay-out">
              <BrandHeader text="chanel" />

              <BrandHeader text="Dior" />
              <BrandHeader text="fendi" />
              <BrandHeader text="versace" />
              <BrandHeader text="gucci" />

              <BrandHeader text="pedro" />
            </div>
          </div>

          <BannerPopular />

          <ProductHomePage />

          <div className="BannerHomePage">
            <BannerHomePage
              border={'2px solid #000'}
              color={'#000'}
              backgroundimage={img4}
              bgcolor="linear-gradient(90deg, #ddebf1 0%, #d3e5ee 42.71%, #c8deec 69.27%, rgba(255, 255, 255, 0) 100%)"
              widthimg={50.67}
              title={<LocaleFormatter id="app.home.limitsShopping" />}
              subtitle={<LocaleFormatter id="app.home.bannerHomePage" />}
            ></BannerHomePage>
          </div>
          <div>
            <MainTitle pt={145} pb={101}>
              <LocaleFormatter id="app.home.bestSellers" />
            </MainTitle>
            <BestSellerMain />
          </div>

          <div>
            <Social />
          </div>
          <div className="banner-plus">
            <BannerPlus />
          </div>
        </StyledMainHome>
      </div>
      <BlogHome />
      <Widget />
    </>
  );
};
