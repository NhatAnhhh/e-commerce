import React from 'react';
import { styled } from 'styled-components';
import { ProductCard } from './ProductCard';
import { Section } from './Section';

const StyledProductAdmin = styled.div``;

export const ProductAdmin = () => {
  return (
    <StyledProductAdmin>
      <ProductCard />
      <Section />
    </StyledProductAdmin>
  );
};
