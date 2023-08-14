import { formatMoney } from '@/utils/formatMoney';
import React from 'react';
import { styled } from 'styled-components';

const ProductStyle = styled.div`
  display: flex;
  gap: 80px;
  padding-top: 14.8px;
`;

const Img = styled.img`
  width: 83.593px;
  height: 103.2px;
  flex-shrink: 0;
`;

const Container = styled.div`
  height: 103.2px;
  width: 184px;
  display: flex;
  flex-direction: column;
  text-align: start;
`;

const NameProduct = styled.div`
  color: #000;

  /* Oswald Medium 18 */
  font-family: Oswald;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
`;

const QTY = styled.div`
  color: var(--gray-4, #bdbdbd);

  /* Roboto Regular 14 AA */
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 485.714% */
  text-transform: uppercase;
`;

const Details = styled.div`
  color: var(--black-2, #3f3f3f);
  display: flex;
  gap: 4px;
  align-items: center;

  /* Roboto Regular 14 AA */
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 485.714% */
  text-transform: uppercase;
`;

const Price = styled.div`
  color: var(--black-2, #3f3f3f);
  text-align: right;

  /* Roboto Regular 14 AA */
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 485.714% */
  text-transform: uppercase;
`;

const StyledMainColor = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => props.color};
`;

export const ProductDetail = ({ color, size, totalPrice, price, name, path, quantity }) => {
  return (
    <>
      <ProductStyle>
        <Img src={path} alt="default-img"></Img>
        <Container>
          <NameProduct>{name}</NameProduct>
          <QTY> Quantity: {quantity} </QTY>
          <QTY> Price: {price && formatMoney(price)} </QTY>
          <Details>
            <div>Color:</div>
            <StyledMainColor color={color}></StyledMainColor>
          </Details>
          <Details>Size: {size}</Details>
        </Container>
        <Price>{totalPrice && formatMoney(totalPrice)}</Price>
      </ProductStyle>
    </>
  );
};
