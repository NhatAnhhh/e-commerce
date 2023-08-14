import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import styled from 'styled-components';

const StyledForm = styled(Form)`
  max-width: 600px;
  label {
    width: 400px;
  }

  .ant-col.ant-form-item-label {
    display: flex;
    width: 22%;
  }

  .ant-form-item-control-input-content {
    display: flex;
    max-width: 90%;
    flex-flow: wrap;
  }

  .ant-form-item-required {
    &::after {
      display: inline-block;
      margin-inline-end: 4px !important;
      color: #ff4d4f;
      font-size: 14px;
      font-family: SimSun, sans-serif;
      line-height: 1;
      content: '*' !important;
    }

    &::before {
      display: none !important;
    }
  }
`;

const CustomInput = styled(Input)`
  border-radius: ${props => props.borderradius};
`;

const CustomButton = styled(Button)`
  border-radius: ${props => props.borderradius};
  width: 140px;
  height: 50px;
  font-family: 'Oswald';
`;

const LitteText = styled.p`
  color: var(--gray-1, #828282);
  /* Roboto Regular 14 */
  font-family: Oswald;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;

const TextPass = styled.p`
  color: var(--link, #0f6db1);
  /* Roboto Regular 14 */
  font-family: Oswald;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  padding-left: 25px;
  cursor: pointer;
`;

const CustomForm = ({ form, inputs, text, onFinish, defaultValue, onFinishFailed, littetext, textpass }) => {
  return (
    <StyledForm
      initialValues={{
        prefix: '09',
      }}
      ref={form}
      name="customForm"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {inputs.map((input, index) =>
        input.textArea ? (
          <Form.Item key={index} label={input.label} name={input.name} rules={input.rules}>
            <Input.TextArea showCount maxLength={100} />
          </Form.Item>
        ) : (
          <Form.Item key={index} label={input.label} name={input.name} rules={input.rules}>
            <CustomInput
              addonBefore={input.addonAfter && input.addonAfter}
              defaultValue={input.defaultValue && input.defaultValue}
              disabled={input.defaultValue}
              borderradius={input.borderradius}
              placeholder={input.placeholder}
              type={input.type}
            />
          </Form.Item>
        ),
      )}
    </StyledForm>
  );
};

export default CustomForm;
