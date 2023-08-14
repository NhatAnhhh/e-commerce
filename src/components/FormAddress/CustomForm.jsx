import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import styled from 'styled-components';

const StyledForm = styled(Form)`
  max-width: 600px;

  .ant-col.ant-form-item-label{
    display: flex;
    width: 22%;
  }

  .ant-form-item-required{
    &::after {
        display: inline-block;
        margin-inline-end: 4px !important;
        color: #ff4d4f;
        font-size: 14px;
        font-family: SimSun,sans-serif;
        line-height: 1;
        content: "*" !important;
    }
    &::before{
        display: none !important;
    }
  }
`;

const CustomInput = styled(Input)`
  border-radius: ${props => props.borderradius};
`;

const CustomButton = styled(Button)`
    border-radius:  ${props => props.borderradius};
    width: 140px;
    height: 50px;
    font-family: "Oswald";
`;

const CustomForm = ({ inputs, checkboxes, onFinish, onFinishFailed }) => {
    return (
        <StyledForm
            name="customForm"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            {inputs.map((input, index) => (
                <Form.Item
                    key={index}
                    label={input.label}
                    name={input.name}
                    rules={input.rules}
                >
                    <CustomInput borderradius={input.borderradius} placeholder={input.placeholder} />
                </Form.Item>
            ))}

            <Form.Item >
                <CustomButton type="primary" htmlType="submit" borderradius="0px">
                    SAVE
                </CustomButton>
            </Form.Item>
        </StyledForm>
    );
};

export default CustomForm;
