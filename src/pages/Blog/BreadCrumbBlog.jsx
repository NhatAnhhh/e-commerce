import { Breadcrumb } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
const StyledBreadCrumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;
export const BreadCrumbBlog = () => {
    return (
        <StyledBreadCrumb>
            <Breadcrumb
                items={[
                    {
                        title: <Link to="/">Home</Link>,
                    },
                    {
                        title: <Link to="#">Womens Dress</Link>,
                    },
                    {
                        title: <Link to="#">Angel malu</Link>,
                    },
                ]}
            />
        </StyledBreadCrumb>
    );
};
