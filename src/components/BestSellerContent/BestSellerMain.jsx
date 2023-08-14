import React from 'react';
import styled from 'styled-components';

import Slider from 'react-slick';

import { NextArrow } from './NextArrow';
import { PrevArrow } from './PrevArrow';
import { CustomDot } from './CustomDot';
import { CardImg } from '../CardImg';
import { useSelector } from 'react-redux';

const StyledWrapperBestSeller = styled.div`
  padding-bottom: 140px;

  .slick-track {
    display: flex;

    gap: 24px;
  }
  .slick-dots {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 0 15px;
    transform: translateY(50%);
  }

  /* @media screen and (max-width: 1321px) {
    .slick-track {
      display: flex;

      gap: 24px;
    }
  } */
`;
var settings = {
  dots: true,
  infinite: true,
  speed: 500,

  slidesToShow: 5,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  appendDots: dots => CustomDot(dots),
  responsive: [
    {
      breakpoint: 1321,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        // arrows: false,
      },
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        // arrows: false,
      },
    },
  ],
};

export const BestSellerMain = () => {
  const listAllProduct = useSelector(state => state.product.listAllProduct);

  const bestSellers = useSelector(state => state.product.bestSellers);

  const handleRedirect = product => {};

  return (
    <StyledWrapperBestSeller>
      <Slider {...settings}>
        {listAllProduct.map((item, idx) => {
          return (
            <div key={idx} className="a">
              <CardImg
                src={item.listImage[0].path}
                onClick={() => handleRedirect(item)}
                product={item}
                width="100%"
                height={450}
                objectFit
                bottomName={item.name}
                bottomCategory={item.catalog.catalogName}
                bottomPrice={item.price}
                colors={item.colors}
                sizes={item.sizes}
              />
            </div>
          );
        })}
      </Slider>
    </StyledWrapperBestSeller>
  );
};
