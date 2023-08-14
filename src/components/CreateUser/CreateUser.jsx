import { Button, DatePicker, Form, Input, Modal, Select, Space, Upload, message } from 'antd';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { InboxOutlined, UploadOutlined, PlusOutlined } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';
import userService from '@/services/userService';
import axios from 'axios';
import { formatDate } from '@/utils/formatDate';
import { useEffect } from 'react';
import { addAsyncUser } from '@/redux/user/userAction';

dayjs.extend(customParseFormat);

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

const StyledMainCreate = styled.div`
  .form-create {
    label {
      width: 100px;
    }
  }
`;

export const CreateUser = ({ roles, setLoadingTable }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const dispatch = useDispatch();

  const [fileList, setFileList] = useState([]);

  const [form] = Form.useForm();

  const onChange = e => {
    setFileList(e.fileList);
  };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const mapDataRoleSelect =
    roles &&
    roles.map(item => {
      return {
        value: item.roleId,
        label: item.roleName,
      };
    });

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = e => {
    setOpen(false);
  };

  const handleOnFinish = async values => {
    const formData = new FormData();

    const file = fileList[0].originFileObj;

    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('password', values.password);
    formData.append('file', file);
    formData.append('birthdate', formatDate(values.birthday));
    formData.append('roles[0].roleId', values.roles);
    setOpen(false);
    setLoadingTable(true);
    const result = await dispatch(addAsyncUser(formData));
    setLoadingTable(false);
    form.resetFields();

    setFileList([]);
    message.success('Create user success');
  };

  const handleOnReset = () => {
    form.resetFields();
    setFileList([]);
  };

  return (
    <StyledMainCreate>
      <Button onClick={showModal} className="btn-adduser">
        Create User
      </Button>

      <Modal
        confirmLoading={confirmLoading}
        title="CREATE NEW USER"
        open={open}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={() => form.submit()}>
            Submit
          </Button>,
          <Button key="cancel" danger onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="reset" onClick={handleOnReset}>
            Reset
          </Button>,
        ]}
      >
        <Form
          form={form}
          labelCol={{ span: 4 }}
          onFinish={handleOnFinish}
          wrapperCol={{ span: 16 }}
          layout="horizontal"
          style={{ maxWidth: '100%' }}
          initialValues={{
            roles: 102,
          }}
        >
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item name="birthday" label="Birthday">
            <DatePicker style={{ width: '100%' }} format={dateFormatList} />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input />
          </Form.Item>
          <Form.Item label="Role" name="roles">
            <Select options={mapDataRoleSelect} />
          </Form.Item>
          <Form.Item label="Avatar" name="files">
            <Upload
              beforeUpload={() => false}
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
              listType="picture"
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </StyledMainCreate>
  );
};
