import React from 'react';
import styled from 'styled-components';
import { Card, Col, Row } from 'antd';
import Example from './BarChart';
import BarChartDashboard from './BarChart';

const StyledMainDashboardChart = styled.div`
  /* height: 200px;
  background-color: red; */
  margin-top: 17px;
`;

export const DashboardChart = ({ loading }) => {
  return (
    <StyledMainDashboardChart>
      <Row gutter={[12, 12]}>
        <Col span={24}>
          <Card bordered={false} loading={loading}>
            <BarChartDashboard />
          </Card>
        </Col>
      </Row>
    </StyledMainDashboardChart>
  );
};
