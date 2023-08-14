import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Typography, Tag, Form, Input, InputNumber, message, Row, Col } from 'antd';

import styled from 'styled-components';
import { TableProduct } from '@/components/TableProduct';
import { useDispatch, useSelector } from 'react-redux';

const StyledSection = styled.div`
  padding: 0 38px !important;
`;
export const Section = () => {
  const [loading, setLoading] = useState(true);
  const [loadingTable, setLoadingTable] = useState(false);
  const dispatch = useDispatch();

  const listAllProducts = useSelector(state => state.product.listAllProduct);

  // mock timer to mimic dashboard data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(undefined);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <StyledSection>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Manage Products</title>
      </Helmet>
      <Typography.Title level={3}>Manage Products</Typography.Title>
      <Row gutter={[12, 12]}>
        <Col span={24}>
          <TableProduct
            loading={loading}
            loadingTable={loadingTable}
            setLoadingTable={setLoadingTable}
            listAllProducts={listAllProducts}
          />
        </Col>
      </Row>
    </StyledSection>
  );
};
