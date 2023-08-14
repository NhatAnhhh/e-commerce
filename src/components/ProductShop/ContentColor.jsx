import React from 'react';
import styled from 'styled-components';

const StyledMainContentColor = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => props.bgcolor};
`;

export const ContentColor = ({ bgcolor }) => {
  return <StyledMainContentColor bgcolor={bgcolor}></StyledMainContentColor>;
};
