import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col, Typography, Tag, Form, Input, InputNumber, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Excel from '@/components/Excel';
import { TableUser } from '@/components/TableUser';
import styled from 'styled-components';
import { CreateUser } from '@/components/CreateUser/CreateUser';
import { fetchAsyncAllUsers } from '@/redux/user/userAction';
import userService from '@/services/userService';

const StyledMainUserPage = styled.div`
  padding: 0 38px !important;
  .btn-adduser {
    background-color: #eb5757;
    color: #ffffff;
    width: 134px;
    height: 36px;
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: 20px;
  }
  .btn-adduser:hover {
    border: none;
    color: #ffffff;
  }
`;

const User = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const [loadingTable, setLoadingTable] = useState(false);
  const { lists } = useSelector(state => state.user.users);

  const [roles, setRoles] = useState();

  const getAllRoles = async () => {
    const res = await userService.getRoles();

    setRoles(res);
  };

  // useEffect(() => {
  //   setLoadingTable(true);
  //   dispatch(fetchAsyncAllUsers());
  //   setLoadingTable(false);
  // }, [lists]);

  // mock timer to mimic dashboard data loading
  useEffect(() => {
    dispatch(fetchAsyncAllUsers());
    getAllRoles();

    const timer = setTimeout(() => {
      setLoading(undefined);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <StyledMainUserPage>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Manage Users</title>
      </Helmet>
      <Typography.Title level={3}>Manage Users</Typography.Title>
      <Row gutter={[12, 12]} style={{ marginBottom: '35px' }} justify="space-between">
        <Col span={8}>
          <Input placeholder="Basic usage" />
        </Col>
        <Col>
          <CreateUser setLoadingTable={setLoadingTable} roles={roles} />
        </Col>
      </Row>
      <Row gutter={[12, 12]}>
        <Col span={24}>
          <TableUser setLoadingTable={setLoadingTable} loading={loading} lists={lists} loadingTable={loadingTable} />
        </Col>
      </Row>
    </StyledMainUserPage>
  );
};

export default User;
