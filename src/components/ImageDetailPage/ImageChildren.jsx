import { Image } from 'antd';
import React from 'react';
import styled from 'styled-components';

const StyledMainImageChildren = styled.div``;

export const ImageChildren = ({ src }) => {
  return (
    <StyledMainImageChildren>
      <Image width={76} height={96} src={src} />
    </StyledMainImageChildren>
  );
};
