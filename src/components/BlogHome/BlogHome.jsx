import React from 'react';
import styled from 'styled-components';
import { CardBlog } from '../CardBlog';

const StyledBlogHome = styled.div`
  color: black;
  background: #f8f9fb;
  margin-top: 82px;
  padding-bottom: 46px;
  .title {
    color: #000;
    /* Oswald Regular 24 */
    font-family: Oswald;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 68px;
    padding-top: 46px;
  }
  .card-blog {
    width: 447px;
    height: 420px;
    background-color: red;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
  }
`;

export const BlogHome = () => {
  return (
    <StyledBlogHome>
      <div className="container1">
        <div className="title">Blog</div>
        <div className="content">
          <CardBlog
            title={'Article'}
            titlecontent={'Exactly What To Wear To Every Type Of Wedding This Summer'}
            content={
              'A large part of the business here is building up the "experience". Double-page spreads in magazines. Ads on TV. Product placement and sponsorship in golf tournaments, tennis matches and sailing competitions. All of this builds up your perception of the brand - and additionally, it costs money.'
            }
            footerblog={'21 January 2018 by guido'}
          ></CardBlog>

          <CardBlog
            title={'Article'}
            titlecontent={'Exactly What To Wear To Every Type Of Wedding This Summer'}
            content={
              'A large part of the business here is building up the "experience". Double-page spreads in magazines. Ads on TV. Product placement and sponsorship in golf tournaments, tennis matches and sailing competitions. All of this builds up your perception of the brand - and additionally, it costs money.'
            }
            footerblog={'21 January 2018 by guido'}
          ></CardBlog>

          <CardBlog
            title={'Article'}
            titlecontent={'Exactly What To Wear To Every Type Of Wedding This Summer'}
            content={
              'A large part of the business here is building up the "experience". Double-page spreads in magazines. Ads on TV. Product placement and sponsorship in golf tournaments, tennis matches and sailing competitions. All of this builds up your perception of the brand - and additionally, it costs money.'
            }
            footerblog={'21 January 2018 by guido'}
          ></CardBlog>

          <CardBlog
            title={'Article'}
            titlecontent={'Exactly What To Wear To Every Type Of Wedding This Summer'}
            content={
              'A large part of the business here is building up the "experience". Double-page spreads in magazines. Ads on TV. Product placement and sponsorship in golf tournaments, tennis matches and sailing competitions. All of this builds up your perception of the brand - and additionally, it costs money.'
            }
            footerblog={'21 January 2018 by guido'}
          ></CardBlog>
        </div>
      </div>
    </StyledBlogHome>
  );
};
