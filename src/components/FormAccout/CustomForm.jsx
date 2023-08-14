import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import styled from 'styled-components';
import userService from '@/services/userService';
import { useSelector } from 'react-redux';

const StyledForm = styled(Form)`
  max-width: 600px;
  .ant-col.ant-form-item-label {
    display: flex;
    width: 25%;
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

const CustomInput = styled(Input.Password)`
  border-radius: ${props => props.borderradius};
`;

const CustomButton = styled(Button)`
  border-radius: ${props => props.borderradius};
  width: 140px;
  height: 50px;
  font-family: 'Oswald';
`;

const CustomForm = ({ inputs, checkboxes }) => {
  const [form] = Form.useForm();

  const { currentUser } = useSelector(state => state.auth);

  const onFinish = async values => {
    await userService.updatePassword({
      userId: currentUser.userId,
      password: values.password,
    });
    form.resetFields();
    message.success('Update password success');
  };

  return (
    <StyledForm form={form} name="customForm" onFinish={onFinish} autoComplete="off">
      {inputs.map((input, index) => (
        <Form.Item
          hasFeedback
          dependencies={input.dependencies && ['password']}
          key={index}
          label={input.label}
          name={input.name}
          rules={input.rules}
        >
          <CustomInput borderradius={input.borderradius} placeholder={input.placeholder} />
        </Form.Item>
      ))}

      {checkboxes &&
        checkboxes.map((checkbox, index) => (
          <Form.Item key={index} name={checkbox.name} valuePropName="checked">
            <Checkbox>{checkbox.label}</Checkbox>
          </Form.Item>
        ))}

      <Form.Item>
        <CustomButton type="primary" htmlType="submit" borderradius="0px">
          SAVE
        </CustomButton>
      </Form.Item>
    </StyledForm>
  );
};

export default CustomForm;
