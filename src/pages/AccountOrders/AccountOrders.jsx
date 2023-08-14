import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import styled from 'styled-components';
import { fetchAsyncOrderById } from '@/redux/order/orderAction';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const StyledMainAccountOrder = styled.div`
  width: 770px;
`;

const AccountOrders = () => {
  const { currentUser } = useSelector(state => state.auth);
  const orders = useSelector(state => state.order.ordersById);

  const dispatch = useDispatch();

  const fetchOrderById = async () => {
    await dispatch(fetchAsyncOrderById(currentUser.userId));
  };

  useEffect(() => {
    fetchOrderById();
  }, []);

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
      render: tag => (
        <>
          {tag ? (
            <Tag color="green" key={tag}>
              Success
            </Tag>
          ) : (
            <Tag color="volcano" key={tag}>
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
    <StyledMainAccountOrder>
      <Table rowKey="id" columns={columns} dataSource={orders} />
    </StyledMainAccountOrder>
  );
};

export default AccountOrders;
