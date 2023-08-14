import { BannerHomePage } from '@/components/BannerHomePage';
import { ProductShop } from '@/components/ProductShop';
import { searchAsyncProductByName } from '@/redux/product/productAction';
import { getQueryStr } from '@/utils/getQueryStr';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import img1 from '@/assets/img/banner/bannerShopHead.svg';
import styled from 'styled-components';

const StyledMainShop = styled.div`
  height: auto;
  padding-top: 114.66px;
  padding-bottom: 70px;

  .bannerHead {
    margin-top: 30px;
  }

  .container {
    padding: 0px 21px;
  }

  .bannerBody {
    padding-top: 30px;
  }
`;

export const Shop = () => {
  const queryStr = getQueryStr('q');
  const dispatch = useDispatch();

  return (
    <>
      <div className="container1">
        <StyledMainShop>
          <div className="bannerHead">
            <BannerHomePage
              border={'2px solid #000'}
              color={'#000'}
              backgroundimage={img1}
              bgcolor="linear-gradient(90deg, #ddebf1 0%, #d3e5ee 42.71%, #c8deec 69.27%, rgba(255, 255, 255, 0) 100%)"
              widthimg={50.67}
              title={'shoping without limits.'}
              subtitle={
                'You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!'
              }
            ></BannerHomePage>
          </div>

          <ProductShop />
        </StyledMainShop>
        ;
      </div>
    </>
  );
};
