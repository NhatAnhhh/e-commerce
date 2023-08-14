import React from 'react';
import { CustomForm } from './CustomForm';
import { styled } from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 60px;
  column-gap: 20px;
`;

const Title = styled.div`
  color: #000;
  font-family: Oswald;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  padding-bottom: 20px;
  display: flex;
  column-gap: 10px;
`;

const Img = styled.img``;

export const Dashboard = ({ currentUser }) => {
  const contentData = [currentUser.role, currentUser.name, currentUser.email];
  const contentData2 = ['You dont subscribe to our newsletter.'];
  const contentData3 = ['You have not set a default billing address.'];
  const contentData4 = ['You have not set a default shipping address.'];
  return (
    <>
      <Title>Account Information</Title>
      <Container>
        <CustomForm
          titlecontent="Contact Information"
          avatar={currentUser.avatar}
          id={currentUser.userId}
          contentItems={contentData}
          button={'Edit'}
          button2={'Change Password'}
        ></CustomForm>

        <CustomForm titlecontent="Newsletters" contentItems={contentData2} button={'Edit'}></CustomForm>
      </Container>

      <Title>
        Address Book<Img src="./src/assets/img/logo/Frame.svg"></Img>
      </Title>
      <Container>
        <CustomForm titlecontent="Default Billing Address" contentItems={contentData3} button={'Edit'}></CustomForm>

        <CustomForm titlecontent="Default Shipping Address" contentItems={contentData4} button={'Edit'}></CustomForm>
      </Container>
    </>
  );
};
