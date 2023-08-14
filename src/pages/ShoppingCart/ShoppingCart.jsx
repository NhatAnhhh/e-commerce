import { Breadcrumb, Button, Form, Input, InputNumber, Popconfirm, Radio, Select, Space, message } from 'antd';
import tru from '@/assets/img/shoppingcart/tru.svg';
import plus from '@/assets/img/shoppingcart/plus.svg';
import imgcart from '@/assets/img/shoppingcart/imgcart.svg';

import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatMoney } from '@/utils/formatMoney';
import productService from '@/services/productService';
import { actDeleteAsyncAllCarts, deleteAsyncInCarts, updateAsyncCart } from '@/redux/order/orderAction';
import { CloseSquareTwoTone, HeartTwoTone, QuestionCircleOutlined } from '@ant-design/icons';

const StyledMainShoppingCart = styled.div`
  padding-top: 140px;
  height: 800px;

  padding-left: 233px;
  padding-right: 233px;
  position: relative;
  padding-bottom: 216px;
  ol {
    position: absolute;
    right: 50%;
    transform: translateX(50%);
  }
  .title {
    margin-top: 30px;
    color: #000;
    text-align: center;
    font-family: Oswald;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 68px; /* 141.667% */
    margin-bottom: 55px;
  }
  .right {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .right-top {
    width: 500px;
    border: 2px solid #c4c4c4;

    padding: 24px;
    background-color: #f0f2f2;
  }

  .content {
    display: flex;
    justify-content: space-between;
    gap: 71px;
  }
  .title-right {
    color: #000;
    font-family: Oswald;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
  }
  .ant-btn {
    border-radius: 0px;
    background-color: white;
    color: black;
    border: 1px solid #d9d9d9;
    border-left: none;
  }
  .input-discount {
    border-radius: 0px;
    height: 44px;
    /* Roboto Regular 16 */
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
  }

  .input-discount::placeholder {
    color: #c4c4c4;
    /* Roboto Regular 16 */
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
  }

  .btn-discount {
    font-family: Oswald;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    height: 44px;
  }
  .title-tax {
    color: #000;
    font-family: Oswald;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 68px;
    /* 283.333% */
  }
  .right-tax {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .right-bottom {
    height: 295px;
    border: 2px solid #c4c4c4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: #f0f2f2;
  }
  .right-bottom-top {
    padding-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
  }

  .btn {
    width: 100%;
    height: 55px;
    border-top: none;
    border-bottom: none;
    background-color: black;
    color: #fff;
    text-align: center;
    /* Oswald Medium 14 */
    font-family: Oswald;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  .btn:hover {
    color: white;
  }
  .f {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .sub {
    color: #000;

    /* Oswald Medium 18 */
    font-family: Oswald;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 133.333% */
  }
  .x {
    color: #828282;
    margin-top: 15px;
    text-align: right;
    /* Oswald Medium 18 */
    font-family: Oswald;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 133.333% */
  }
  .order {
    color: #000;
    text-align: right;
    /* Oswald Regular 24 */
    font-family: Oswald;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 68px; /* 283.333% */
    padding-bottom: 10px;
    border-bottom: 2px solid #c4c4c4;
  }
  .text-checkout {
    margin-top: 20px;
    color: #828282;
    text-align: center;
    /* Oswald Medium 14 */
    font-family: Oswald;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
`;

const StyledRightContent = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  .right-content-title {
    color: #828282;
    /* Roboto Regular 16 */
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
  }
  .form-tax {
    margin-top: 20px;
    label {
      width: 200px;
      /* Roboto Regular 16 */
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      /* 125% */
      color: #3f3f3f;
    }
    .ant-select-selector {
      border-radius: 0px;
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const StyledLeftMain = styled.div`
  width: 883px;
  .list-menu-left {
    padding-bottom: 18px;
    border-bottom: 1px solid #828282;
    ul {
      display: flex;
      gap: 40px;

      margin: 0;
      padding: 0;
    }
  }
  .list-cart {
    padding-top: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #828282;

    ul {
      display: flex;
      gap: 40px;

      padding: 0;
    }
  }
  .item:first-child {
    width: 238px;
  }
  .item {
    width: 78px;
    color: #828282;
    /* Oswald Medium 18 AA */
    font-family: Oswald;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  .item-cart:first-child {
    width: 238px;
  }
  .item-cart {
    width: 78px;
    color: #828282;
    /* Oswald Medium 18 AA */
    height: 103;
    font-family: Oswald;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  .item-cart:not(:first-child) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .layout-item-cart-1 {
    width: 100%;
    display: flex;
    gap: 17.41px;
  }
  .item-title-1 {
    color: #000;
    /* Oswald Medium 18 AA */
    font-family: Oswald;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  .cart-2 {
    color: #000;
    font-family: Oswald;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
  .cart-3 {
    color: #000;
    font-family: Oswald;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
  .left-btn {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
  }
  .button-left {
    width: 200px;
    height: 40px;
    border: 1px solid #c4c4c4;
    background-color: #f0f2f2;
    color: #828282;
    text-align: center;
    /* Oswald Medium 14 */
    font-family: Oswald;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  .cart-6 {
    display: flex;
    gap: 10px;
  }
  .no-product {
    text-align: center;

    color: #000;
    font-family: Oswald;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 68px; /* 283.333% */
    text-transform: uppercase;
  }
  .layout-item-cart-1 {
    img {
      height: 103px;
      width: 100px;
      object-fit: cover;
    }
  }
  .wrap-name-color {
  }
`;
const StyledColor = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: ${props => props.color};
`;

const { Search } = Input;

export const ShoppingCart = () => {
  const [show, setShow] = useState(false);
  const [valueQuantity, setValueQuantity] = useState();

  const carts = useSelector(state => state.order.carts);
  const isAuthenticated = useSelector(state => Boolean(state.auth.token));
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const onChangeQuantity = async (quantity, id, idSize, idColor) => {
    await dispatch(updateAsyncCart({ productID: id, sizeID: idSize, colorID: idColor, quantity: quantity }, id));
    message.success('update quantity success');
  };

  const handleClickClear = async () => {
    await dispatch(actDeleteAsyncAllCarts());
    message.success('delete carts success');
  };

  const handleDeleteInCarts = async item => {
    await dispatch(deleteAsyncInCarts(item.productID, item.sizeID, item.colorID));
  };

  const handleCheckout = () => {
    if (isAuthenticated) {
      navigate('/checkout');
    } else {
      navigate('/login');
    }
  };

  return (
    <StyledMainShoppingCart>
      <Breadcrumb
        items={[
          {
            title: 'Home',
          },
          {
            title: ' Shopping Cart',
          },
        ]}
      />
      <div className="title">Shopping Cart</div>
      <div className="content">
        <StyledLeftMain>
          <div className="list-menu-left">
            <ul>
              <li className="item">PRODUCT</li>
              <li className="item">Price</li>
              <li className="item">Size</li>
              <li className="item">Quantity</li>
              <li className="item">Total</li>
            </ul>
          </div>
          <div className="list-cart">
            {carts.length > 0 ? (
              carts.map((item, idx) => {
                return (
                  <ul key={idx}>
                    <li className="item-cart">
                      <div className="layout-item-cart-1">
                        <img src={item.image} alt="img-cart" />
                        <div className="wrap-name-color">
                          <div className="item-title-1">{item.productName} </div>
                          <StyledColor color={item.color.name}></StyledColor>
                        </div>
                      </div>
                    </li>
                    <li className="item-cart cart-2">{formatMoney(item.price)}</li>
                    <li className="item-cart cart-3">{item.size.name}</li>
                    <li className="item-cart cart-4">
                      <InputNumber
                        defaultValue={item.quantity}
                        size="large"
                        min={1}
                        max={50}
                        onChange={e => onChangeQuantity(e, item.productID, item.sizeID, item.colorID)}
                        className="input-number"
                      />
                    </li>
                    <li className="item-cart cart-2">{formatMoney(item.totalPrice)}</li>
                    <li className="item-cart cart-6">
                      <div>
                        <HeartTwoTone twoToneColor="#eb2f96" />
                      </div>

                      <div>
                        <Popconfirm
                          title="Do you want delete product"
                          description="Are you sure to delete this product?"
                          onConfirm={() => handleDeleteInCarts(item)}
                          icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                        >
                          <CloseSquareTwoTone />
                        </Popconfirm>
                      </div>
                    </li>
                  </ul>
                );
              })
            ) : (
              <div className="no-product">There are no products in the cart</div>
            )}
          </div>
          <div className="left-btn">
            <Button className="button-left" onClick={() => navigate('/')}>
              continue shopping
            </Button>
            <Button className="button-left" onClick={() => handleClickClear()}>
              clear shopping cart
            </Button>
          </div>
        </StyledLeftMain>
        <div className="right">
          <div className="right-top">
            <div className="title-right">Apply Discount Code</div>
            <Space.Compact
              style={{
                width: '100%',
                marginTop: '15px',
              }}
            >
              <Input placeholder="Enter discount code" className="input-discount" />
              <Button type="primary" className="btn-discount">
                Enter discount code
              </Button>
            </Space.Compact>
            <div className="right-tax">
              <div className="title-tax">Estimate Shipping and Tax</div>
              <div onClick={() => setShow(!show)}>
                {show ? <img src={tru} alt="tru" /> : <img src={plus} alt="tru" />}
              </div>
            </div>

            <StyledRightContent show={show}>
              <div className="right-content-title">Enter your destination to get a shipping estimate.</div>
              <div className="form-tax">
                <Form>
                  <Form.Item label="Select" required>
                    <Select>
                      <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Select" required>
                    <Select>
                      <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Select">
                    <Select>
                      <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Radio" layout="vertical">
                    <Radio.Group>
                      <Radio value="apple"> Apple </Radio>
                      <Radio value="apple"> Apple </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Form>
              </div>
            </StyledRightContent>
          </div>
          <div className="right-bottom">
            <div className="right-bottom-top">
              <div className="order f">
                <div className="order-text">Order Total</div>
                <div className="order-number">
                  {formatMoney(carts.reduce((total, item) => total + item.totalPrice, 0))}
                </div>
              </div>

              <div className="text-checkout">Check Out with Multiple Addresses</div>
            </div>
            <Button className="btn right-bottom-bottom" onClick={() => handleCheckout()}>
              proceed to checkout
            </Button>
          </div>
        </div>
      </div>
    </StyledMainShoppingCart>
  );
};
