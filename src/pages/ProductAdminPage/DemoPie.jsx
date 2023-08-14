import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

export const DemoPie = () => {
  const data = [
    {
      type: 'PS5 (42%)',
      value: 42,
    },
    {
      type: 'iPhone 13 (21%)',
      value: 21,
    },
    {
      type: 'XboxOneX (15%)',
      value: 15,
    },
    {
      type: 'iPadPro (12%)',
      value: 12,
    },
    {
      type: 'iPhone12 (10%)',
      value: 10,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: ' ',
      },
    },
  };
  return <Pie {...config} />;
};