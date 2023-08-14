import { Breadcrumb } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

export const BreadCrumbAccount = ({ breadcrumbtitle }) => {
  return (
    <>
      <Breadcrumb
        items={[
          {
            title: (
              <Link className="a-breadcrumb" to="/">
                Home
              </Link>
            ),
          },
          {
            title: breadcrumbtitle,
          },
        ]}
      />
    </>
  );
};
