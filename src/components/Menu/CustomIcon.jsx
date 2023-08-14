import {
  ContainerTwoTone,
  LayoutTwoTone,
  SmileTwoTone,
  MenuFoldOutlined,
  DashboardTwoTone,
  FireTwoTone,
  MessageTwoTone,
} from '@ant-design/icons';

import styled from 'styled-components';

const StyledIconMain = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  svg {
    width: 24px;
    height: 24px;
  }
`;

export const CustomIcon = props => {
  const { type } = props;

  let com = <MenuFoldOutlined />;

  if (type === 'guide') {
    com = <FireTwoTone twoToneColor={'red'} />;
  } else if (type === 'permission') {
    com = <MenuFoldOutlined />;
  } else if (type === 'dashboard') {
    com = <DashboardTwoTone twoToneColor="#1E293B" />;
  } else if (type === 'user') {
    com = <SmileTwoTone twoToneColor="#52c41a" />;
  } else if (type === 'product') {
    com = <LayoutTwoTone twoToneColor="#eb2f96" />;
  } else if (type === 'order') {
    com = <ContainerTwoTone />;
  } else {
    com = <MenuFoldOutlined />;
  }

  return <StyledIconMain>{com}</StyledIconMain>;
};
