import React from 'react';
import CustomForm from './CustomForm';
import { styled } from 'styled-components';
import { Col, Row } from 'antd';

const inputs = [
    { label: 'First Name', name: 'FirstName', borderradius: "0px", rules: [{ required: true, message: 'Please enter your First Name' }] },
    { label: 'Last Name', name: 'LastName', borderradius: "0px", rules: [{ required: false }] },
    { label: 'Phone Number', name: 'PhoneNumber', borderradius: "0px", rules: [{ required: true, message: 'Please enter your Phone Number' }] },
    { label: 'Address', name: 'Address', borderradius: "0px", rules: [{ required: true, message: 'Please enter your Address' }] }
];



const Title = styled.div`
    color: #000;
    font-family: Oswald;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 68px;
`;

export const FormAddress = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (<>

        <Title>Contact Information</Title>
        <CustomForm
            inputs={inputs}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        />

    </>

    );
};

