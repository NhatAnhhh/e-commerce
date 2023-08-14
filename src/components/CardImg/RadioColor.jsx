import { Radio } from 'antd';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const StyledMainRadio = styled.div`
  .ant-radio-button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 0px !important;
  }
`;
const StyledMainColor = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${props => props.colorpicker};
`;

export const RadioColor = ({ item }) => {

     console.log(item.id);

  return (
    <StyledMainRadio >
    
      <Radio.Group>
        <Radio.Button  value={item.id} >
          <StyledMainColor colorpicker={item.name}></StyledMainColor>
        </Radio.Button>
      </Radio.Group>
    </StyledMainRadio>
  );
};
