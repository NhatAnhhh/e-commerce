import React from 'react';
import styled from 'styled-components';
import { BannerBlogPage } from '@/components/BannerBlogPage';
import { Typography } from 'antd';
const { Title } = Typography;
import { BreadCrumbBlog } from './BreadCrumbBlog';
import { BlogContent } from './BlogContent';
import { BlogAd } from './BlogAd';
import { BestSellerMain } from '@/components/BestSellerContent';

const StyledMainBlog = styled.div`
  height: auto;
  padding-top: 114.66px;
  font-size: 100px;
  padding-bottom: 23px;
  .BannerHomePage {
    width: 100%;
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .blog-content{
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* gap: 0px 99px; */
  }

  .img-bottom {
    display: none;
  }
  .liked-para{
    padding-left: 21px;
    font-family: Oswald;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 68px; /* 283.333% */
  }
  `;

export const Blog = () => {
  return (
    <StyledMainBlog>
      <div className="BannerHomePage">
        <BreadCrumbBlog />
        <BannerBlogPage></BannerBlogPage>
      </div>
      <div className="container1">
        <div className="blog-content">
          <BlogContent />
          <BlogAd />
        </div>
        <div className="liked">
          <p className='liked-para'>You May Also Like</p>
          <BestSellerMain />
        </div>
      </div>
    </StyledMainBlog>
  );
};
