import React, { useState } from 'react';
import styled from 'styled-components';
import { CardImg } from '../CardImg';
import imgProduct3 from '@/assets/img/product/Rectangle 7.svg';
import { Button, Card, Radio, Skeleton, Space } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncAllProductsHome } from '@/redux/product/productAction';
import { convertSlug } from '@/utils/getQueryStr';
import { useNavigate } from 'react-router-dom';

const StyledMainHomePage = styled.div`
  color: black;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

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
      display: none;
    }
  }
  @media screen and (max-width: 590px) {
    .right {
      grid-template-columns: 1fr;
    }
  }
  .btn-load {
    width: 200px;
    height: 55px;
    border-radius: 0px;
    text-align: center;
    /* Oswald Medium 14 */
    font-family: Oswald;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #828282;
    border-color: #828282;
  }

  .right-btn {
    padding-top: 63px;
    padding-bottom: 30px;
    text-align: center;
  }
  .left-title {
    color: #000;
    /* Oswald Regular 24 */
    font-family: Oswald;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 68px;
  }
  /* .ant-radio input {
    color: black !important;
  } */

  .ant-radio-wrapper {
    span {
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 68px;
      text-transform: uppercase;
      color: #3f3f3f;
    }
  }
`;

export const ProductHomePage = () => {
  const [loadings, setLoadings] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { lists: products, currentPage, totalPages } = useSelector(state => state.product.productsHomePage);

  const listCatalogs = useSelector(state => state.catalog.listCatalogs);

  const HasMorePost = currentPage < totalPages ? false : true;

  const handleLoadMore = async () => {
    if (loadings) {
      return;
    }
    setLoadings(true);

    await dispatch(fetchAsyncAllProductsHome({ currentPage: currentPage + 1 }));
    setLoadings(false);
  };

  const handleRedirect = product => {
    const slug = convertSlug(product.name);
    navigate(`/detail/${slug}?id=${product.id}`);
  };

  return (
    <StyledMainHomePage>
      <div className="left">
        <div className="left-title">Filters</div>
        <Radio.Group buttonStyle="solid">
          <Space direction="vertical">
            {listCatalogs.map(item => {
              return (
                <Radio onChange={e => setValueBrand(e.target.value)} key={item.catalogId} value={item.catalogId}>
                  {item.catalogName}
                </Radio>
              );
            })}
          </Space>
        </Radio.Group>
      </div>
      <div className="wrapper-right">
        <div className="right">
          {products.map(product => {
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
                />
              </div>
            );
          })}
        </div>

        <div className="right-btn">
          <Button className="btn-load" disabled={HasMorePost} loading={loadings} onClick={handleLoadMore} ghost>
            LOAD MORE
          </Button>
        </div>
      </div>
    </StyledMainHomePage>
  );
};
