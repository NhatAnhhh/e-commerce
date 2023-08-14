import { Radio } from 'antd';
import React from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';
const ShippingStyle = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 10px;
  margin-bottom: 10px;

  .ant-radio-wrapper.css-dev-only-do-not-override-owivv6 {
    width: 110px;
  }
`;

const Money = styled.div`
  color: var(--black, #000);
  font-family: Oswald;
  font-size: 14px;
  font-style: normal;
  width: 100px;
  text-transform: uppercase;

  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;

const Title = styled.span`
  color: var(--black-2, #3f3f3f);

  /* Roboto Regular 14 */
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  width: 130px;
  text-align: start;
`;

const Boder = styled.div`
  border-top: 2px solid #c4c4c4;
`;

export const Shipping = ({ money, value }) => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <ShippingStyle>
        <Radio value={value}>
          <Money>{money}</Money>
        </Radio>
      </ShippingStyle>
    </>
  );
};
