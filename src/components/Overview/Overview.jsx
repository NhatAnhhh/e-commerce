import { Card, Col, Row } from 'antd';
import styled from 'styled-components';
import { useLocale } from '@/locales';
import charBarIcon from '@/assets/img/dashboard/chart-bar.svg';
import shoppingCart from '@/assets/img/dashboard/shopping-cart.svg';
import shoppingBag from '@/assets/img/dashboard/shopping-bag.svg';
import emojicon from '@/assets/img/dashboard/emoji-happy.svg';

const StyledMainOverview = styled.div`
  .overview {
    height: 200px;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  .overview-title {
    color: #64748b;
    font-size: 25px;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 800;
    line-height: 20px;
    margin-bottom: 40px;
  }
  .overview-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
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
        <div className="overview-title">{metaName}</div>
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

export const Overview = ({ loading, totalUser, totalProduct }) => {
  const { formatMessage } = useLocale();

  return (
    <StyledMainOverview>
      <Row gutter={[12, 12]}>
        <ColCard
          loading={loading}
          metaName={'Total Visits'}
          metaCount="126,560"
          bgicon="#EB5757"
          srcIcon={charBarIcon}
        />
        <ColCard loading={loading} metaName={'Total Orders'} metaCount="8846" bgicon="#38BDF8" srcIcon={shoppingCart} />
        <ColCard
          loading={loading}
          metaName={'Total Products'}
          metaCount={totalProduct}
          bgicon="#4ADE80"
          srcIcon={shoppingBag}
        />
        <ColCard loading={loading} metaName={'Total User'} metaCount={totalUser} bgicon="#64748B" srcIcon={emojicon} />
      </Row>
    </StyledMainOverview>
  );
};
