import React, { useState } from 'react';
import styled from 'styled-components';
import { RadioColor } from './RadioColor';
import { Button, Card, Radio, Space, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addAsyncProductToCarts } from '@/redux/order/orderAction';
import { formatMoney } from '@/utils/formatMoney';
import { addAsyncProductToWishLists } from '@/redux/wishlist/wishlistAction';
import { getQueryStr } from '@/utils/getQueryStr';
import { highlightText } from '@/utils/getGloabal';

const StyledCardImg = styled.div`
  width: ${props => props.width};
  height: ${props => `${props.height}px`};
  position: relative;
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 50px;
    font-family: Oswald;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;

    text-transform: uppercase;
    color: #828282;
  }
  &:hover .img-bottom {
    visibility: visible;
    opacity: 1;
  }
  .b {
    display: flex;
  }
  .img-bottom {
    width: ${props => `${props.width}px`};
    background-color: white;
    height: 90px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    visibility: hidden;
    opacity: 0;
    transition: all 0.25s linear;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .sale {
    width: 52px;
    height: 24px;
    background-color: #1e2832;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 22px;
    left: 0px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .btn-save {
    display: flex;
    align-items: center;

    gap: 5px;
  }
  .btn-add-card {
    background-color: black;
    color: white;
  }
  .btn-add-card:hover {
    background-color: #eb5757;
    border: none;
    color: white;
    transition: all 0.25s linear;
  }
  .a {
    .ant-radio-inner {
      width: 10px;
      height: 10px;
      background-color: #c4c4c4;
      border: none;
    }
    .ant-radio-inner::after {
      background-color: black;
    }
    margin-top: 7px;
  }
`;

const StyledBottomContent = styled.div`
  margin-top: 18px;

  .bottom-name {
    color: #000;
    font-family: Oswald;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-bottom: 10px;
  }
  .bottom-category {
    font-family: Oswald;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;

    color: #bdbdbd;
  }
  .bottom-price {
    margin-bottom: 5px;
    color: #000;
    font-family: Oswald;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
  }
  .wrapper-color {
    display: flex;
    gap: 10px;
  }

  .wrap-radio {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .style-radio-size {
    width: 46px;
    height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: Oswald;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 68px;
    text-transform: uppercase;
  }
  .bottom-length {
    font-size: 14px;
    font-style: normal;
    font-weight: bold;

    text-transform: uppercase;
  }
`;

const StyledMainColor = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${props => props.colorpicker};
`;

export const CardImg = ({
  onClick,
  colors,
  width,
  height,
  src,
  sale,
  bottomName,
  bottomCategory,
  bottomPrice,
  sizes,
  product,
  bottomLength,
}) => {
  const isAuthenticated = useSelector(state => Boolean(state.auth.token));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();
  const queryStr = getQueryStr('q', location);

  const [valueSize, setValueSize] = useState(0);
  const [valueColor, setValueColor] = useState(0);

  const onClickAddToCart = item => {
    if (valueColor === 0 || valueSize === 0) {
      message.error('Vui long chon size hoac color');
      return;
    } else {
      dispatch(
        addAsyncProductToCarts({
          productID: item.id,
          sizeID: valueSize,
          colorID: valueColor,
          quantity: 1,
          price: item.price,
        }),
      );
    }
  };

  const onSaveToWishList = item => {
    if (isAuthenticated) {
      dispatch(addAsyncProductToWishLists(item.id));
    } else {
      navigate('/login');
    }
  };

  return (
    <Card>
      <StyledCardImg width={width} height={height}>
        {sale && <div className="sale">Sale</div>}
        <div className="img-bottom">
          <div className="a">
            <Radio.Group defaultValue={1}>
              <Radio value={1}></Radio>
              <Radio value={2}></Radio>
              <Radio value={3}></Radio>
              <Radio value={4}></Radio>
            </Radio.Group>
          </div>
          <div className="b">
            <Button onClick={() => onClickAddToCart(product)} className="btn-add-card btn">
              ADD TO CARD
            </Button>
            <Button onClick={() => onSaveToWishList(product)} className="btn-save btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                <path
                  d="M9.88849 13.3396L9.88845 13.3395L9.88666 13.3412L9.84757 13.3785L9.80272 13.3396L9.80269 13.3396C8.09177 11.8591 6.6744 10.6323 5.6843 9.52797C4.69351 8.42288 4.13917 7.44949 4.13917 6.47658C4.13917 5.1331 5.19452 4.12331 6.60917 4.12331C7.69994 4.12331 8.76019 4.7997 9.13328 5.71271L9.14599 5.7438H9.17957H10.5188H10.5524L10.5651 5.71271C10.9381 4.7997 11.9984 4.12331 13.0892 4.12331C14.5038 4.12331 15.5592 5.1331 15.5592 6.47658C15.5592 7.44948 15.0048 8.42287 14.0132 9.52795C13.0222 10.6323 11.603 11.859 9.88849 13.3396ZM9.81639 15.3378L9.84917 15.3662L9.88195 15.3378L10.9259 14.4315C12.7789 12.829 14.3212 11.4942 15.3996 10.2359C16.4786 8.97704 17.0992 7.78814 17.0992 6.47658C17.0992 4.32495 15.3321 2.65001 13.0892 2.65001C11.8417 2.65001 10.6439 3.19501 9.84917 4.05406C9.05447 3.19501 7.85662 2.65001 6.60917 2.65001C4.36628 2.65001 2.59917 4.32495 2.59917 6.47658C2.59917 7.78814 3.21977 8.97704 4.29871 10.2359C5.37718 11.4942 6.91948 12.829 8.77246 14.4315L9.81639 15.3378Z"
                  fill="#3F3F3F"
                  stroke="#828282"
                  strokeWidth="1"
                />
              </svg>
              <div>SAVE</div>
            </Button>
          </div>
        </div>
        <img onClick={onClick} src={src} />
      </StyledCardImg>
      <StyledBottomContent>
        <div className="bottom-category">{bottomCategory}</div>
        {bottomLength && (
          <div className="bottom-length">
            DRESS LENGTH: <span className="bottom-category">{bottomLength}</span>
          </div>
        )}

        {queryStr ? (
          <div className="bottom-name">
            <span dangerouslySetInnerHTML={{ __html: highlightText(queryStr, bottomName) }} />
          </div>
        ) : (
          <div className="bottom-name">{bottomName}</div>
        )}

        <div className="bottom-price">{formatMoney(bottomPrice)}</div>

        {sizes && (
          <div className="wrapper-color">
            <Radio.Group onChange={e => setValueSize(e.target.value)} value={valueSize} buttonStyle="solid">
              <Space direction="horizontal" wrap>
                {sizes.map(item => {
                  return (
                    <Radio.Button key={item.id} className="style-radio-size" value={item.id}>
                      {item.name}
                    </Radio.Button>
                  );
                })}
              </Space>
            </Radio.Group>
          </div>
        )}
        {colors && (
          <div className="wrapper-color">
            <Radio.Group onChange={e => setValueColor(e.target.value)} value={valueColor}>
              {colors.map(item => {
                return (
                  <Space key={item.id} direction="horizontal" style={{ marginRight: '7px', marginTop: '7px' }} wrap>
                    <Radio.Button className="wrap-radio" value={item.id}>
                      <StyledMainColor colorpicker={item.name}></StyledMainColor>
                    </Radio.Button>
                  </Space>
                );
              })}
            </Radio.Group>
          </div>
        )}
      </StyledBottomContent>
    </Card>
  );
};
