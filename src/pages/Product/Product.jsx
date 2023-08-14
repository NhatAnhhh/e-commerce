import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
const StyledMainProduct = styled.div`
  padding-top: 114.66px;
  font-size: 100px;
`;

const Product = () => {
  const params = useParams();
  console.log(params);
  return <StyledMainProduct>Product</StyledMainProduct>;
};

export default Product;
