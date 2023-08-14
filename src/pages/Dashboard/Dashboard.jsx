import { DashboardChart } from '@/components/DashboardChart';
import { Overview } from '@/components/Overview';
import productService from '@/services/productService';
import userService from '@/services/userService';

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const StyledMainDoashBoard = styled.div``;

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [totalUser, setTotalUser] = useState(0);
  const [totalProduct, setTotalProduct] = useState(0);
  const dispatch = useDispatch();

  const fetchCountUser = async () => {
    const result = await userService.countTotalUser();
    setTotalUser(result);
  };

  const fetchCountProduct = async () => {
    const result = await productService.countTotalProduct();
    setTotalProduct(result);
  };

  useEffect(() => {
    // fetchCountUser();
    // fetchCountProduct();
  }, [totalUser, totalProduct]);

  // mock timer to mimic dashboard data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(undefined);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <StyledMainDoashBoard>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard</title>
      </Helmet>
      <Overview totalUser={totalUser} totalProduct={totalProduct} loading={loading} />
      <DashboardChart loading={loading} />
      {/* <DashboardChart />
      <DashboardChart /> */}
    </StyledMainDoashBoard>
  );
};

export default Dashboard;
