import React from 'react';
import { styled } from 'styled-components';
import CustomForm from './CustomForm';
import { Shipping } from './Shipping';
import { ProductDetail } from './ProductDetail';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Radio, Select } from 'antd';

const ShippingStyled = styled.div`
  height: auto;
  padding-left: 239px;
  padding-right: 239px;
  .cover {
    display: flex;
    justify-content: space-between;
    width: 75%;
  }
`;

const ShowProduct = styled.div`
  padding-bottom: 2%;
`;

const TitleItem = styled.p`
  color: var(--black-2, #3f3f3f);
  font-family: Oswald;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 0px; /* 125% */
  width: 100%;
  height: 15px;
  text-align: start;
`;

const Left = styled.div`
  float: left;

  height: auto;
  .method-shipping {
    margin-bottom: 50px;
  }
`;

const Right = styled.div`
  float: right;
  width: 49.6%;
  height: auto;
  border: 2px solid var(--divider, #c4c4c4);
  background: var(--light-blue-hover, #f0f2f2);
`;

const Product = styled.div`
  width: 100%;
  height: auto;
  padding-left: 30px;
`;

const Title = styled.div`
  color: #000;
  font-family: Oswald;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 68px;
  text-align: start;
`;

const Boder = styled.div`
  border-bottom: 2px solid #c4c4c4;
  width: 90%;
  margin-bottom: 20px;
`;

const Img = styled.img`
  cursor: pointer;
`;

export const PageShipping = ({ currentUser, form, handleChange, inputPayment }) => {
  const [ShowProductDetail, setShowProdcutDetail] = useState(true);

  const carts = useSelector(state => state.order.carts);

  const handleProdcut = () => {
    setShowProdcutDetail(!ShowProductDetail);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="09">+09</Option>
        <Option value="03">+03</Option>
      </Select>
    </Form.Item>
  );

  const input2 = [
    {
      label: 'Name',
      name: 'name',
      borderradius: '0px',
      defaultValue: currentUser.name,
    },
    { label: 'Email', name: 'email', borderradius: '0px', defaultValue: currentUser.email },
    {
      label: 'Phone',
      name: 'phone',
      borderradius: '0px',
      addonAfter: prefixSelector,
      rules: [{ required: true, message: 'Please enter your phone' }],
    },
    {
      label: 'Address',
      name: 'address',
      textArea: true,
      borderradius: '0px',
      rules: [{ required: true, message: 'Please enter your Street Address' }],
    },
  ];

  return (
    <>
      <ShippingStyled>
        <Left>
          <Title>Shipping Address</Title>

          <CustomForm form={form} inputs={input2}></CustomForm>
          <div className="method-shipping">
            <Title>Payment Methods</Title>
            <Radio.Group onChange={handleChange} defaultValue={inputPayment}>
              <Shipping money={'direct payment'} value={1}></Shipping>

              <Shipping money={'online payment'} value={2}></Shipping>
            </Radio.Group>
          </div>
        </Left>
        <Right>
          <Product>
            <Title>Order Summary</Title>
            <div className="cover">
              <TitleItem>{carts.length} Item in Cart</TitleItem>
              <Img src="./src/assets/img/product/Show.svg" onClick={handleProdcut}></Img>
            </div>
            <Boder></Boder>
            {ShowProductDetail && (
              <ShowProduct>
                {carts.length > 0 ? (
                  carts.map((item, idx) => {
                    return (
                      <ProductDetail
                        key={idx}
                        totalPrice={item.totalPrice}
                        price={item.price}
                        name={item.productName}
                        size={item.size.name}
                        color={item.color.name}
                        quantity={item.quantity}
                        path={item.image}
                      ></ProductDetail>
                    );
                  })
                ) : (
                  <div>NO PRODUCT IN CARTS</div>
                )}
              </ShowProduct>
            )}
          </Product>
        </Right>
      </ShippingStyled>
    </>
  );
};
