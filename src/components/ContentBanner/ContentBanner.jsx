import React from 'react';
import img1 from '@/assets/img/slider/image1.svg';
import img2 from '@/assets/img/slider/image 3.svg';
import imgSale from '@/assets/img/banner/summerbanner.png';
import { LocaleFormatter } from '@/locales';

export const ContentBanner = () => {
  return (
    <>
      <div className="a">
        <div className="a-sale">
          <img src={imgSale} alt="img-sale" className="a-sale" />
          <button><LocaleFormatter id='app.home.shopNow'/></button>
        </div>
      </div>
      <div className="b">
        <div className="img1">
          <img alt="img1" src={img1} />
        </div>
        <div className="img2">
          <img alt="img2" src={img2} />
        </div>
      </div>
    </>
  );
};
