import React from 'react';
import { styled } from 'styled-components';

import { CloseSquareTwoTone } from '@ant-design/icons';
import { formatMoney } from '@/utils/formatMoney';
import { Button, InputNumber, Radio, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { addAsyncProductToWishLists } from '@/redux/wishlist/wishlistAction';
const StyledItemCart = styled.div`
  width: 200px;
  height: 353px;
  display: flex;
  flex-direction: row;
  gap: 0px 9px;
  img {
    max-width: none;
  }
  .cartBtn {
    width: 117px;
    height: 40px;
    flex-shrink: 0;
    background-color: #000;
    color: #fff;
  }
  .cartBtn:hover {
    background-color: #ff6f61;
  }
  .itemCartLeft {
    display: flex;
    flex-direction: column;
  }

  .price {
    color: var(--gray-1, #828282);
    font-family: Oswald;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
  .cartBottom {
    display: flex;
    flex-direction: row;
    gap: 17px 10px;
    align-items: center;
  }
  .productQuantity {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    border: 1px solid #c4c4c4;
    background: #fff;

    color: #3f3f3f;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    font-family: Oswald;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
  }
  .itemCartRight {
    svg {
      width: 25px;
      height: 50px;
    }
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 50px;
    font-family: Oswald;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;

    text-transform: uppercase;
    color: #828282;
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
  .wrap-radio {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const StyledImageProduct = styled.img`
  width: 167px;
  height: 219px;
  flex-shrink: 0;
  background-image: url(${props => props.src});
`;
const StyledProductTitle = styled.p`
  color: var(--black, #000);

  font-family: Oswald;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
`;
const StyledProductPrice = styled.p`
  color: var(--gray-1, #828282);
  font-family: Oswald;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
const StyledMainColor = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${props => props.colorpicker};
`;
export const ItemCart = ({ id, src, title, price, quantity, sizes, colors }) => {
  const dispatch = useDispatch();

  const handleDeleteWishlist = id => {
    dispatch(addAsyncProductToWishLists(id));
  };

  return (
    <StyledItemCart>
      <div className="itemCartLeft">
        <StyledImageProduct src={src} />
        <StyledProductTitle>{title}</StyledProductTitle>
        {colors && (
          <div className="wrapper-color">
            <Radio.Group>
              {colors.map(item => {
                return (
                  <Space key={item.id} direction="horizontal" style={{ marginRight: '3px', marginTop: '3px' }} wrap>
                    <Radio.Button className="wrap-radio" value={item.id}>
                      <StyledMainColor colorpicker={item.name}></StyledMainColor>
                    </Radio.Button>
                  </Space>
                );
              })}
            </Radio.Group>
          </div>
        )}
        {sizes && (
          <div className="wrapper-color">
            <Radio.Group buttonStyle="solid">
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

        <StyledProductPrice>{formatMoney(price)}</StyledProductPrice>
        <div className="cartBottom">
          <InputNumber
            defaultValue={1}
            size="large"
            min={1}
            max={50}
            style={{ width: '55px' }}
            // onChange={onChangeQuantity}
            className="input-number"
          />

          <Button className="btn-add-card btn">ADD TO CARD</Button>
        </div>
      </div>
      <div className="itemCartRight">
        <CloseSquareTwoTone onClick={() => handleDeleteWishlist(id)} twoToneColor="red" />
      </div>
    </StyledItemCart>
  );
};
