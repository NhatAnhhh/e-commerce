import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

export const DemoLine = () => {
    const data = [
        {
            day: '1',
            value: 0,
        },
        {
            day: '2',
            value: 0,
        },
        {
            day: '3',
            value: 0,
        },
        {
            day: '4',
            value: 0,
        },
        {
            day: '5',
            value: 0,
        },
        {
            day: '6',
            value: 0,
        },
        {
            day: '7',
            value: 0,
        },
        {
            day: '8',
            value: 0,
        },
        {
            day: '9',
            value: 0,
        },
        {
            day: '10',
            value: 0,
        },
        {
            day: '11',
            value: 0,
        },
        {
            day: '12',
            value: 0,
        },
        {
            day: '13',
            value: 0,
          },
          {
            day: '14',
            value: 0,
          },
          {
            day: '15',
            value: 0,
          },
          {
            day: '16',
            value: 0,
          },
          {
            day: '18',
            value: 0,
          },
          {
            day: '19',
            value: 0,
          },
          {
            day: '20',
            value: 0,
          },
          {
            day: '21',
            value: 0,
          },
          {
            day: '22',
            value: 7,
          },
          {
            day: '23',
            value: 0,
          },
          {
            day: '24',
            value: 0,
          },
          {
            day: '25',
            value: 0,
          },
          {
            day: '26',
            value: 0,
          },
          {
            day: '27',
            value: 0,
          },
          {
            day: '28',
            value: 0,
          },
          {
            day: '29',
            value: 0,
          },
          {
            day: '30',
            value: 0,
          },
    ];
    const config = {
        data,
        xField: 'day',
        yField: 'value',
        label: {},
        point: {
            size: 5,
            shape: 'circle',
            style: {
                fill: '#5B8FF9',
                stroke: '#5B8FF9',
                lineWidth: 2,
            },
        },
        tooltip: {
            showMarkers: false,
        },
        state: {
            active: {
                style: {
                    shadowBlur: 4,
                    stroke: '#000',
                    fill: 'red',
                },
            },
        },
        interactions: [
            {
                type: 'marker-active',
            },
        ],
    };
    return <div style={{
      width: '100%',
      height: '100%',
    }}>
      <Line {...config} />
    </div>;
};