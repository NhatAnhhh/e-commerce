import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { HeaderClient } from '../../../components/HeaderClient';
import { Footer } from '../../../components/FooterClient';
import { useState } from 'react';
import { ConfigProvider, Spin, theme as a } from 'antd';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncGetAllBestSeller, fetchAsyncGetAllProducts } from '@/redux/product/productAction';
import { fetchAllAsyncCatalogs } from '@/redux/catalog/catalogAction';
import { fetchAllAsyncColors } from '@/redux/color/colorAction';
import { fetchAllAsyncSizes } from '@/redux/size/sizeAction';
import { fetchAllAsyncLengths } from '@/redux/length/lengthAction';

const StyledMainLayout = styled.div``;

const Layout = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const fetchAllProductsShop = async () => {
    await dispatch(fetchAsyncGetAllProducts());
  };

  const fetchAllCatalogs = async () => {
    await dispatch(fetchAllAsyncCatalogs());
  };

  const fetchAllColors = async () => {
    await dispatch(fetchAllAsyncColors());
  };

  const fetchAllSizes = async () => {
    await dispatch(fetchAllAsyncSizes());
  };

  const fetchAllLengths = async () => {
    await dispatch(fetchAllAsyncLengths());
  };

  const fetchAllBestSeller = async () => {
    await dispatch(fetchAsyncGetAllBestSeller());
  };

  useEffect(() => {
    fetchAllCatalogs();
    fetchAllColors();
    fetchAllSizes();
    fetchAllProductsShop();
    fetchAllLengths();
    fetchAllBestSeller();
  }, []);

  const toggleCartModal = () => {
    setIsOpen(prevState => !prevState);
  };
  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: 'black' },
        algorithm: a.defaultAlgorithm,
      }}
    >
      <StyledMainLayout>
        <HeaderClient />
        <main>
          <Outlet />
        </main>
        <Footer />
      </StyledMainLayout>
    </ConfigProvider>
  );
};

export default Layout;
