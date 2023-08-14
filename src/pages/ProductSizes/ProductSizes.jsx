import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col, Typography } from 'antd';
import styled from 'styled-components';
import { TableSize } from '@/components/TableSize';
import { useDispatch, useSelector } from 'react-redux';
const StyledMainSizes = styled.div`
  padding: 0 38px !important;
`;

export const ProductSizes = () => {
  const [loading, setLoading] = useState(true);
  const [loadingTable, setLoadingTable] = useState(false);
  const dispatch = useDispatch();

  const listSizes = useSelector(state => state.size.listSizes);

  // const fetchAllColors = async () => {
  //   await dispatch(fetchAllAsyncColors());
  // };

  // mock timer to mimic dashboard data loading
  useEffect(() => {
    //   fetchAllColors();

    const timer = setTimeout(() => {
      setLoading(undefined);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <StyledMainSizes>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Manage Sizes</title>
      </Helmet>
      <Typography.Title level={3}>Manage Sizes</Typography.Title>
      <TableSize
        listSizes={listSizes}
        setLoadingTable={setLoadingTable}
        loading={loading}
        loadingTable={loadingTable}
      />
    </StyledMainSizes>
  );
};
