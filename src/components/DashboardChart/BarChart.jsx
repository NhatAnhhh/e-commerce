import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';
import { Helmet } from 'react-helmet';
import { Select, Typography } from 'antd';

import { styled } from 'styled-components';

const TitleTotal = styled.div`
  color: #a7a7a7;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Total = styled.div`
  color: #000;

  display: flex;
  width: 234.692px;
  flex-direction: column;
  flex-shrink: 0;
  font-family: Roboto;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const HeaderChartStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SelectionStyled = styled.div``;
const data = [
  {
    name: 'Jan',
    uv: 2000,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 2500,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 4000,
    pv: 3000,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2500,
    pv: 1500,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 6000,
    pv: 5500,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 3000,
    pv: 2500,
    amt: 2500,
  },
  {
    name: 'Jul',
    uv: 2590,
    pv: 1800,
    amt: 2100,
  },
  {
    name: 'Aug',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Sep',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Oct',
    uv: 2200,
    pv: 2000,
    amt: 2100,
  },
  {
    name: 'Nov',
    uv: 1800,
    pv: 1100,
    // amt: 2100,
  },
  {
    name: 'Dec',
    uv: 1500,
    pv: 800,
    // amt: 2100,
  },
];

export default class BarChartDashboard extends PureComponent {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Bar Chart</title>
        </Helmet>
        <Typography.Title className="title" level={2}>
          <TitleTotal>Total Revenue</TitleTotal>
          <HeaderChartStyled>
            <Total>$980,273.00</Total>

            <SelectionStyled>
              <Select
                style={{
                  width: 200,
                }}
                defaultValue="This year"
              />
            </SelectionStyled>
          </HeaderChartStyled>
        </Typography.Title>

        <ResponsiveContainer width="100%" height={585}>
          <BarChart
            width={400}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barGap={0}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}

            <CartesianGrid strokeWidth={1} vertical={false} horizontal={false} stroke="#DEDEE7" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="pv" fill="#94A3B8" barSize={35} radius={[20, 20, 0, 0]} />
            <Bar dataKey="uv" fill="#EB5757" barSize={35} radius={[20, 20, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </>
    );
  }
}
