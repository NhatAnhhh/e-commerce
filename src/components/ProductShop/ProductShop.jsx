import React, { useState } from 'react';
import styled from 'styled-components';
import imgProduct3 from '@/assets/img/product/Rectangle 7.svg';
import { CardImg } from '../CardImg';
import { Button, InputNumber, Radio, Select, Slider, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { TitleFilter } from './TitleFilter';
import { ContentColor } from './ContentColor';
import { BannerHomePage } from '../BannerHomePage';
import { useDispatch, useSelector } from 'react-redux';
import img2 from '@/assets/img/banner/bannerBody.svg';

import { fetchAsyncGetAllProducts, filterAsyncProducts } from '@/redux/product/productAction';
import { formatMoney } from '@/utils/formatMoney';

const StyledMainProductShop = styled.div`
  color: black;
  display: flex;
  justify-content: space-between;
  margin-top: 72px;
  .left {
    width: 450px;
    margin-right: 26px;
  }
  .right {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 26px;
  }

  .wrapper-right {
    padding-left: 30px;
    border-left: 1px solid #c4c4c4;
  }
  .wrap-filter {
    margin-bottom: 31px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .ant-select-selector {
    height: 46px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0px;
  }
  .ant-select-selection-item {
    font-family: Oswald;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 68px;
    text-transform: uppercase;
  }

  .filter-price {
    width: 255px;
    margin-right: 20px;
  }
  .filter-number {
    width: 69px;
  }
  .t {
    margin-top: 20px;
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
  .ant-radio-wrapper {
    span {
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 50px;
      text-transform: uppercase;
      color: #3f3f3f;
    }
  }

  @media screen and (max-width: 1725px) {
    .right {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media screen and (max-width: 1365px) {
    .right {
      grid-template-columns: 1fr 1fr;
      border: none;
      padding-left: 0px;
    }
    .wrapper-right {
      border: none;
      padding-left: 0px;
    }
  }
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .left {
      width: 100%;
      height: 80px;
    }
  }
  @media screen and (max-width: 590px) {
    .right {
      grid-template-columns: 1fr;
    }
  }
  .mt {
    margin-top: 25px;
  }
  .w {
    width: 270px;
    margin-top: 20px;
  }
  .price-range-main {
    margin-top: 40px;
  }
  .vv {
    margin-top: 50px;
  }
  .r {
    margin-top: 40px;
    margin-bottom: 80px;
  }
  .number-input {
    display: flex;
    justify-content: space-between;
  }
  .kk {
    input {
      color: #000;
      /* Roboto Regular 14 AA */
      font-family: Roboto;

      font-style: normal;
      font-weight: 400;

      text-transform: uppercase;
    }
    span {
      color: #000;
      /* Roboto Regular 14 AA */
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;

      text-transform: uppercase;
    }
  }

  .btn-pricerange {
    width: 114px;
    height: 40px;
    color: #c4c4c4;
    background-color: #f0f2f2;
  }
`;

export const ProductShop = () => {
  const [inputValue1, setInputValue1] = useState(0);
  const [inputValue2, setInputValue2] = useState(0);
  const [valueBrand, setValueBrand] = useState(0);
  const [valueLength, setValueLength] = useState(0);
  const [valueSize, setValueSize] = useState(0);
  const [valueColor, setValueColor] = useState(0);
  const dispatch = useDispatch();

  const listAllProduct = useSelector(state => state.product.listAllProduct);

  const listColors = useSelector(state => state.color.listColors);
  const listSizes = useSelector(state => state.size.listSizes);
  const listCatalogs = useSelector(state => state.catalog.listCatalogs);
  const listLengths = useSelector(state => state.length.listLengths);

  const items = [
    {
      label: '1st menu item',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: '2nd menu item',
      key: '2',
      icon: <UserOutlined />,
    },
    {
      label: '3rd menu item',
      key: '3',
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: '4rd menu item',
      key: '4',
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];

  const handleOnChangeSlider = newValue => {
    setInputValue1(newValue[0]);
    setInputValue2(newValue[1]);
  };

  const handleApply = async () => {
    const formData = new FormData();
    if (valueBrand !== 0) {
      formData.append('catalogID', valueBrand);
    }

    if (valueColor !== 0) {
      formData.append('color', valueColor);
    }

    if (valueSize !== 0) {
      formData.append('size', valueSize);
    }

    if (valueLength !== 0) {
      formData.append('lengthID', valueLength);
    }

    formData.append('startPrice', inputValue1);
    if (inputValue2 !== 0) {
      formData.append('endPrice', inputValue2);
    }

    await dispatch(filterAsyncProducts(formData));
  };

  const handleReset = async () => {
    setValueBrand(0);
    setValueSize(0);
    setValueColor(0);
    setValueLength(0);
    await dispatch(fetchAsyncGetAllProducts());
  };

  const formatter = value => `${formatMoney(value)}`;

  return (
    <StyledMainProductShop>
      <div className="left">
        <div className="brand-main">
          <TitleFilter titleName="BRAND" />

          <Radio.Group onChange={e => setValueBrand(e.target.value)} value={valueBrand} buttonStyle="solid">
            <Space direction="vertical">
              {listCatalogs.map(item => {
                return (
                  <Radio key={item.catalogId} value={item.catalogId}>
                    {item.catalogName}
                  </Radio>
                );
              })}
            </Space>
          </Radio.Group>
        </div>
        <div className="size-main mt">
          <TitleFilter titleName="SIZE" />
          <div className="w">
            <Radio.Group buttonStyle="solid" onChange={e => setValueSize(e.target.value)} value={valueSize}>
              <Space direction="horizontal" wrap>
                {listSizes.map(item => {
                  return (
                    <Radio.Button key={item.id} className="style-radio-size" value={item.id}>
                      {item.name}
                    </Radio.Button>
                  );
                })}
              </Space>
            </Radio.Group>
          </div>
        </div>
        <div className="dress-main mt">
          <TitleFilter titleName="DRESS LENGTH" />
          <div className="w">
            <Radio.Group onChange={e => setValueLength(e.target.value)} value={valueLength} buttonStyle="solid">
              <Space direction="vertical">
                {listLengths.map(item => {
                  return (
                    <Radio key={item.id} value={item.id}>
                      {item.name}
                    </Radio>
                  );
                })}
              </Space>
            </Radio.Group>
          </div>
        </div>

        <div className="color-main mt">
          <TitleFilter titleName="COLOR" />
          <div className="w">
            <Radio.Group onChange={e => setValueColor(e.target.value)} value={valueColor}>
              <Space direction="horizontal" wrap>
                {listColors.map(item => {
                  return (
                    <Radio.Button key={item.id} className="style-radio-size" value={item.id}>
                      <ContentColor bgcolor={item.name} />
                    </Radio.Button>
                  );
                })}
              </Space>
            </Radio.Group>
          </div>
        </div>

        <div className="price-range-main">
          <TitleFilter titleName="PRICE RANGE" />
          <div className="number-input">
            <div className="kk">
              <InputNumber value={inputValue1} bordered={false} />
              <span>VND</span>
            </div>
            <div className="kk">
              <InputNumber value={inputValue2} bordered={false} />
              <span>VND</span>
            </div>
          </div>
          <div className="r">
            <Slider
              min={1}
              max={50000000}
              tooltip={{
                formatter,
              }}
              range={{
                draggableTrack: true,
              }}
              onChange={handleOnChangeSlider}
              defaultValue={[inputValue1, inputValue2]}
            />
          </div>
          <div className="wrap-filter">
            <div></div>
            <Space>
              <Button onClick={handleApply} className="btn-pricerange">
                Apply
              </Button>
              <Button onClick={handleReset} className="btn-pricerange">
                Reset
              </Button>
            </Space>
          </div>
        </div>
      </div>
      <div className="wrapper-right">
        <div className="wrap-filter">
          <div className="layout-filter"></div>
          <Space wrap>
            <Select
              defaultValue="price (High to low)"
              className="filter-price"
              //   onChange={handleChange}
              options={[
                {
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'price (High to low)',
                  label: 'price (High to low)',
                },
                {
                  value: 'Yiminghe',
                  label: 'yiminghe',
                },
                {
                  value: 'disabled',
                  label: 'Disabled',
                  disabled: true,
                },
              ]}
            />
            <Select
              className="filter-number"
              defaultValue="48"
              options={[
                {
                  value: '48',
                  label: '48',
                },
              ]}
            />
          </Space>
        </div>
        <div className="right">
          {listAllProduct.length > 0 ? (
            listAllProduct.map(product => {
              return (
                <div key={product.id}>
                  <CardImg
                    src={product.listImage[0].path}
                    onClick={() => handleRedirect(product)}
                    product={product}
                    width="100%"
                    height={450}
                    objectFit
                    bottomName={product.name}
                    bottomCategory={product.catalog.catalogName}
                    bottomPrice={product.price}
                    colors={product.colors}
                    sizes={product.sizes}
                    bottomLength={product.length.name}
                  />
                </div>
              );
            })
          ) : (
            <div style={{ width: '800px', height: '300px', marginTop: '150px', fontWeight: 'bold', fontSize: '45px' }}>
              There are no products with this filter...
            </div>
          )}
        </div>
        <div className="vv">
          <BannerHomePage
            border={'2px solid #FFF'}
            color={'#FFF'}
            backgroundimage={img2}
            bgcolor="linear-gradient(90deg, #000 0%, #000 69.37%, #000 89.11%, rgba(0, 0, 0, 0.00) 100%)"
            widthimg={50.67}
            title={'shoping without limits.'}
            subtitle={
              'You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!'
            }
          ></BannerHomePage>
        </div>
      </div>
    </StyledMainProductShop>
  );
};
