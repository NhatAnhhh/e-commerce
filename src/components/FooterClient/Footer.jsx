import React from 'react';
import styled from 'styled-components';
import { Logo } from '../HeaderClient';
import { Button } from '../Button';
import iconIns from '@/assets/img/footer/icon-ins.svg';
import iconFacebook from '@/assets/img/footer/icon-facebook.svg';
import iconTwitter from '@/assets/img/footer/icon-twitter.svg';
import iconPlus from '@/assets/img/footer/plus.svg';
import { LocaleFormatter } from '@/locales';

const StyledMainFooter = styled.div`
  /* height: 200px; */

  padding-top: 73px;
  background-color: black;

  @media only screen and (max-width: 600px) {
    .footer-top {
      padding-left: 10px;
      width: 100%;
    }
    .footer-title {
      position: relative;
      border-bottom: 1px solid #4f4f4f;
    }
    
    ul :hover #net {
      display: block;
    }
    button {
      width: 100%;
    }
    #net {
      display: none;
    }
    .plus-features {
      display: inline-block !important;
      position: absolute;
      right: 0;
    }
    .plus-menu {
      display: inline-block !important;
      position: absolute;
      right: 0;
    }
    .plus-contact {
      display: inline-block !important;
      position: absolute;
      right: 0;
    }
    .plus-follow {
      display: inline-block !important;
      position: absolute;
      right: 0;
    }
  }

  .top {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    /* gap: -1px 180px; */
    flex-wrap: wrap;
    padding-bottom: 100px;
    border-bottom: 1px solid #4f4f4f;
  }
  .footer-top {
    display: flex;
    flex-direction: column;
  }
  .footer-title {
    margin-top: 0px;
    margin-bottom: 30px;
    color: #fff;
    font-size: 18px;
    font-family: Oswald;
    font-style: normal;
    font-weight: 600;
    text-transform: uppercase;
  }
  .footer-title-mini {
    margin: 0px;
    color: #fff;
    font-size: 12px;
    font-family: Oswald;
    font-style: normal;
    font-weight: 500;
    text-transform: uppercase;
  }
  .footer-body {
    margin-top: 8px;
    margin-bottom: 8px;
    color: #828282;
    font-size: 13px;
    font-family: Oswald;
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
  }
  .footer-icon {
    display: flex;
    gap: 18.7px;
    margin-bottom: 26px;
  }
  .email {
    margin-top: 13px;
    margin-bottom: 7px;
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 15.25px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #fff;
    border: 1px solid #fff;
  }
  .bottom {
    margin-top: 14px;
    padding-bottom: 40px;
    color: white;
    font-size: 12px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    line-height: 27px;
    text-transform: uppercase;
  }
  nav ul li {
    list-style-type: none;
    text-align: center;
  }
  ul {
    padding-left: 0px;
  }
  .plus {
    display: none;
  }
`;

export const Footer = () => {
  return (
    <StyledMainFooter>
      <div className="container1">
        <div className="top">
          <div>
            <Logo />
          </div>

          <div className="footer-top">
            <ul>
              <li>
                <p className="footer-title">
                  <LocaleFormatter id="app.home.features" />{' '}
                  <img className="plus plus-features" src={iconPlus} alt="iconPlus" />
                </p>
                <ul id="net">
                  <li>
                    <p className="footer-body">
                      <LocaleFormatter id="app.home.men" />
                    </p>
                  </li>
                  <li>
                    <p className="footer-body">
                      <LocaleFormatter id="app.home.women" />
                    </p>
                  </li>
                  <li>
                    <p className="footer-body">
                      <LocaleFormatter id="app.home.boys" />
                    </p>
                  </li>
                  <li>
                    <p className="footer-body">
                      <LocaleFormatter id="app.home.girls" />
                    </p>
                  </li>
                  <li>
                    <p className="footer-body">
                      <LocaleFormatter id="app.home.newArrivals" />
                    </p>
                  </li>
                  <li>
                    <p className="footer-body">
                      <LocaleFormatter id="app.home.shoes" />
                    </p>
                  </li>
                  <li>
                    <p className="footer-body">
                      <LocaleFormatter id="app.home.clothes" />
                    </p>
                  </li>
                  <li>
                    <p className="footer-body">
                      <LocaleFormatter id="app.home.accessories" />
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="footer-top">
            <ul>
              <li>
                <p className="footer-title">
                  <LocaleFormatter id="app.home.menu" />
                  <img className="plus plus-menu" src={iconPlus} alt="iconPlus" />
                </p>
                <ul id="net">
                  <li>
                    <p className="footer-body">
                      <LocaleFormatter id="app.home.aboutUs" />
                    </p>
                  </li>
                  <li>
                    <p className="footer-body">
                      <LocaleFormatter id="app.home.contactUs" />
                    </p>
                  </li>
                  <li>
                    <p className="footer-body">
                      <LocaleFormatter id="app.home.myAccount" />
                    </p>
                  </li>
                  <li>
                    <p className="footer-body">
                      <LocaleFormatter id="app.home.orderHistory" />
                    </p>
                  </li>
                  <li>
                    <p className="footer-body">
                      <LocaleFormatter id="app.home.myWishlist" />
                    </p>
                  </li>
                  <li>
                    <p className="footer-body">
                      <LocaleFormatter id="app.home.blog" />
                    </p>
                  </li>
                  <li>
                    <p className="footer-body">
                      <LocaleFormatter id="app.home.logIn" />
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="footer-top">
            <ul>
              <li>
                <p className="footer-title">
                  <LocaleFormatter id="app.home.contactUs" />{' '}
                  <img className="plus plus-contact" src={iconPlus} alt="iconPlus" />
                </p>
                <ul id="net">
                  <li>
                    <p className="footer-title-mini">
                      <LocaleFormatter id="app.home.address" />
                    </p>
                  </li>
                  <li>
                    <p className="footer-body">123 STREET NAME, CITY, ENGLAND</p>
                  </li>
                  <li>
                    <p className="footer-title-mini">
                      <LocaleFormatter id="app.home.phone" />
                    </p>
                  </li>
                  <li>
                    {' '}
                    <p className="footer-body">(123) 456-7890</p>
                  </li>
                  <li>
                    <p className="footer-title-mini">EMAIL:</p>
                  </li>
                  <li>
                    <p className="footer-body">MAIL@EXAMPLE.COM</p>
                  </li>
                  <li>
                    <p className="footer-title-mini">
                      <LocaleFormatter id="app.home.working" />
                    </p>
                  </li>
                  <li>
                    <p className="footer-body">
                      <LocaleFormatter id="app.home.work" />
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="footer-top">
            <ul>
              <li>
                <p className="footer-title">
                  <LocaleFormatter id="app.home.followUs" />{' '}
                  <img className="plus plus-follow" src={iconPlus} alt="iconPlus" />
                </p>
                <ul id="net">
                  <li>
                    <p className="footer-body footer-icon">
                      <img src={iconFacebook} alt="FacebookIcon" />
                      FACEBOOK
                    </p>
                  </li>
                  <li>
                    <p className="footer-body footer-icon">
                      <img src={iconTwitter} alt="TwitterIcon" />
                      TWITTER
                    </p>
                  </li>
                  <li>
                    <p className="footer-body footer-icon">
                      <img src={iconIns} alt="InstagramIcon" />
                      INSTAGRAM
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="footer-top">
            <ul>
              <li>
                <p className="footer-title">
                  <LocaleFormatter id="app.home.joinUs" />
                </p>
                <ul>
                  <li>
                    <p className="footer-body">
                      <LocaleFormatter id="app.home.subscribe" />
                    </p>
                  </li>
                  <li>
                    <p className="email">
                      <LocaleFormatter id="app.home.emailAddress" />
                    </p>
                  </li>
                  <li>
                    {' '}
                    <Button
                      padding="10.5px 82px"
                      color="black"
                      backgroundcolor=" #FFF"
                      label="SUBCRIBE!"
                      //fonts
                      fontFamily="Oswald"
                      fontStyle="normal"
                      fontWeight={400}
                      fontSize="164x"
                      lineheight="normal"
                      /* identical to box height */

                      texttransform="uppercase"
                    />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">&copy; 2023 BY SBCS</div>
      </div>
    </StyledMainFooter>
  );
};
