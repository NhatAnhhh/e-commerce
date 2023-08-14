import React from 'react';
import styled from 'styled-components';

const StyledWrapperText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
  /* identical to box height */

  text-align: center;
  text-transform: capitalize;
  margin-top: 30px;

  /* Primary */

  color: #ff6f61;
  padding-bottom: 131px;
`;
export const SocialText = () => {
  return <StyledWrapperText>@lisa.official</StyledWrapperText>;
};
