import React from 'react';
import { styled } from 'styled-components';
import Img from './Img';
import { SocialMain } from '../SocialContent';
import { Button } from 'antd';
import { Helmet } from 'react-helmet';

const UserDetailStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;

  .Title{
    color: var(--colors-gray-400, #94A3B8);
    font-family: Nunito Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    padding: 14px;
  }
.coverCard{
    padding: 14px;
}
`;

const Card = styled.div`
  width: 100%;
  max-width: 1104px;
  /* border: 1px solid var(--colors-gray-100, #F1F5F9); */
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const IndexPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: 100%;
  border-top: 1px solid #FFF;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Text = styled.div`
  padding: 10px;
`;

const CustomButton = styled(Button)`
  display: flex;
  height: 36px;
  padding: 8px 16px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--colors-primary-500, #0EA5E9);
  color: #1E293B;
  box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.10);
  margin-top: 32px;
  font-family: Oswald;
  
`;

export const UserDetail = () => {
    return <>
        <Helmet>
        <meta charSet="utf-8" />
        <title>User Detail</title>
        </Helmet>
        <UserDetailStyle>
            <div className="Title">User Details: Digital Creative</div>
            <Card>
                <Img />
                <IndexPage>
                    <Text>Name</Text>
                    <Text>Women Black Checked Fit and Flare Dress</Text>
                </IndexPage>
                <IndexPage>
                    <Text>Price</Text>
                    <Text>99$</Text>
                </IndexPage>
                <IndexPage>
                    <Text>Category</Text>
                    <Text>Dress</Text>
                </IndexPage>
                <IndexPage>
                    <Text>Branch</Text>
                    <Text>Zara</Text>
                </IndexPage>
                <IndexPage>
                    <Text>Available Size</Text>
                    <Text>S, M , L</Text>
                </IndexPage>
                <IndexPage>
                    <Text>Status</Text>
                    <Text>Publish</Text>
                </IndexPage>
                <IndexPage>
                    <Text>Details</Text>
                    <Text>Desc</Text>
                </IndexPage>


            </Card>
            <div className="coverCard">
                <SocialMain numToShow={4} />
                <CustomButton>Edit Product</CustomButton>
            </div>

        </UserDetailStyle>
    </>


};
