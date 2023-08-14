import { Card, Col, Row } from 'antd';
import styled from 'styled-components';
import { useLocale } from '@/locales';
import cash from '@/assets/img/admin/cash.svg';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DemoPie } from './DemoPie';
import { DemoLine } from './DemoLine';
dayjs.extend(customParseFormat);
const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';
const customWeekStartEndFormat = value =>
  `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value).endOf('week').format(weekFormat)}`;
const StyledProductCard = styled.div`
  .overview {
    height: 200px;
    display: flex;
    flex-direction: column;
  }
  .top-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .overview-title {
    color: #64748b;
    font-size: 25px;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 800;
    line-height: 20px;
  }
  .overview-desc {
    color: #64748b;
    font-size: 25px;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 800;
    line-height: 20px;
  }
  .overview-content {
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .overview-content-text {
    font-size: 40px;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    color: #64748b;
    width: 83px;
  }
  .overview-pie {
    width: 82%;
    height: 94%;
  }
  .overview-line {
    width: 82%;
    height: 130px;
  }
`;

const StyledContentMeta = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgicon};

  border-radius: 8px;
`;

const wrapperCol = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 12,
  xxl: 6,
};

const ColCard = ({ metaName, metaCount, loading, bgicon, srcIcon }) => {
  return (
    <Col {...wrapperCol}>
      <Card loading={loading} className="overview" bordered={false}>
        <div className="top-card">
          <div className="overview-title">{metaName}</div>
          <div className="date-picker">
            <DatePicker defaultValue={dayjs()} format={customWeekStartEndFormat} picker="week" />
          </div>
        </div>
        <div className="overview-content">
          <StyledContentMeta bgicon={bgicon}>
            <img src={srcIcon} alt="default-icon" />
          </StyledContentMeta>
          <div className="overview-content-text">{metaCount}</div>
        </div>
      </Card>
    </Col>
  );
};

const ColCard2 = ({ metaName, metaCount, loading }) => {
  return (
    <Col {...wrapperCol}>
      <Card loading={loading} className="overview" bordered={false}>
        <div className="top-card">
          <div className="overview-title">{metaName}</div>
          <div className="date-picker">
            <DatePicker defaultValue={dayjs()} format={customWeekStartEndFormat} picker="week" />
          </div>
        </div>
        <div className="overview-content">
          <div className="overview-content-text">{metaCount}</div>
          <div className="overview-line"><DemoLine /></div>
        </div>
      </Card>
    </Col>
  );
};

const ColCard3 = ({ metaName, metaDesc, loading }) => {
  return (
    <Col {...wrapperCol}>
      <Card loading={loading} className="overview" bordered={false}>
        <div className="top-card">
          <div className="overview-title">{metaName}</div>
          <div className="overview-desc">{metaDesc}</div>
        </div>
        <div className="overview-pie">
          <DemoPie />
        </div>
      </Card>
    </Col>
  );
};

export const ProductCard = ({ loading }) => {
  const { formatMessage } = useLocale();

  return (
    <StyledProductCard>
      <Row gutter={[12, 12]}>
        <ColCard loading={loading} metaName={'Total Revenue'} metaCount="$9193" bgicon="#38BDF8" srcIcon={cash} />
        <ColCard2 loading={loading} metaName={'Daily Orders'} metaCount="43" />
        <ColCard3 loading={loading} metaName={'Product Sales Ratio'} metaDesc={'(235 total)'} />
      </Row>
    </StyledProductCard>
  );
};
