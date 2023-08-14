import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col, Typography } from 'antd';
import styled from 'styled-components';
import { TableCatalog } from '@/components/TableCatalog';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllAsyncCatalogs } from '@/redux/catalog/catalogAction';
const StyledMainCatalogs = styled.div`
  padding: 0 38px !important;
`;

export const ProductCatalogs = () => {
  const [loading, setLoading] = useState(true);
  const [loadingTable, setLoadingTable] = useState(false);

  const listCatalogs = useSelector(state => state.catalog.listCatalogs);

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
    <StyledMainCatalogs>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Manage Catalogs</title>
      </Helmet>
      <Typography.Title level={3}>Manage Catalogs</Typography.Title>
      <Row gutter={[12, 12]}>
        <Col span={24}>
          <TableCatalog
            listCatalogs={listCatalogs}
            setLoadingTable={setLoadingTable}
            loading={loading}
            loadingTable={loadingTable}
          />
        </Col>
      </Row>
    </StyledMainCatalogs>
  );
};
