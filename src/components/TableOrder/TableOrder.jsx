import { updateAsyncOrder } from '@/redux/order/orderAction';
import { Card, Col, Row, Table, Tag, Typography, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledMainTableOrder = styled.div``;

export const TableOrder = () => {
  const orders = useSelector(state => state.order.listOrders);
  const [loading, setLoading] = useState(true);
  const [loadingTable, setLoadingTable] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(undefined);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleClick = async record => {
    setLoadingTable(true);
    await dispatch(updateAsyncOrder(record.id));
    setLoadingTable(false);
    message.success('Update Success');
  };

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Code',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (tag, record) => (
        <>
          {tag ? (
            <Tag color="green" key={tag}>
              Success
            </Tag>
          ) : (
            <Tag onClick={() => handleClick(record)} color="volcano" key={tag}>
              Delivery
            </Tag>
          )}
        </>
      ),
    },

    {
      title: 'Address',
      dataIndex: 'customerAddress',
      key: 'customerAddress',
    },
    {
      title: 'Email',
      dataIndex: 'customerEmail',
      key: 'customerEmail',
    },
    {
      title: 'Name',
      dataIndex: 'customerName',
      key: 'customerName',
    },
    {
      title: 'Phone',
      dataIndex: 'customerPhone',
      key: 'customerPhone',
    },
  ];

  return (
    <StyledMainTableOrder>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Manage Orders</title>
      </Helmet>
      <Typography.Title level={3}>Manage Orders</Typography.Title>

      <Row gutter={[12, 12]}>
        <Col span={24}>
          <Card bordered={false} loading={loading}>
            <Table loadingTable={loadingTable} rowKey="id" columns={columns} dataSource={orders} />
          </Card>
        </Col>
      </Row>
    </StyledMainTableOrder>
  );
};
