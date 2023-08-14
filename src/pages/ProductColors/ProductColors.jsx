import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col, Typography } from 'antd';

import styled from 'styled-components';

import { TableColor } from '@/components/TableColor';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllAsyncColors } from '@/redux/color/colorAction';

const StyledMainColors = styled.div`
  padding: 0 38px !important;
`;

export const ProductColors = () => {
  const [loading, setLoading] = useState(true);
  const [loadingTable, setLoadingTable] = useState(false);
  const dispatch = useDispatch();

  const listColors = useSelector(state => state.color.listColors);

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
    <StyledMainColors>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Manage Colors</title>
      </Helmet>
      <Typography.Title level={3}>Manage Colors</Typography.Title>
      <Row gutter={[12, 12]}>
        <Col span={24}>
          <TableColor
            listColors={listColors}
            setLoadingTable={setLoadingTable}
            loading={loading}
            loadingTable={loadingTable}
          />
        </Col>
      </Row>
    </StyledMainColors>
  );
};
