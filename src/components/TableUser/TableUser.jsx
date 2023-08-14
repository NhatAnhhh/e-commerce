import React from 'react';
import {
  Table,
  Form,
  Card,
  Button,
  Space,
  Popconfirm,
  Tag,
  message,
  DatePicker,
  Input,
  Tooltip,
  Select,
  Avatar,
} from 'antd';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import Icon, {
  CheckCircleTwoTone,
  QuestionCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  FolderViewOutlined,
  CloseCircleTwoTone,
} from '@ant-design/icons';
import { current } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { deleteAsyncUser, editAsyncUser } from '@/redux/user/userAction';
import { PandaSvg } from './Default';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { formatDate } from '@/utils/formatDate';

dayjs.extend(customParseFormat);

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

const StyledMainTable = styled.div`
  .img-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      object-fit: cover;
    }
  }
  .icon-role {
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

const PandaIcon = props => <Icon component={PandaSvg} {...props} />;

const EditableCell = ({ editing, dataIndex, title, inputType, record, index, children, ...restProps }) => {
  const inputNode = inputType === 'date' ? <Input /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export const TableUser = ({ loading, lists, loadingTable, setLoadingTable }) => {
  const [editRowKey, setEditRowKey] = useState('');
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const isEditing = record => record.userId === editRowKey;

  const handleEdit = record => {
    form.setFieldsValue({
      name: '',
      email: '',
      birthdate: '',
      ...record,
    });

    setEditRowKey(record.userId);
  };

  const handleDelete = async id => {
    setLoadingTable(true);
    const result = await dispatch(deleteAsyncUser(id));
    setLoadingTable(false);
    message.success(result.message);
  };

  const handleSave = async id => {
    try {
      const row = await form.validateFields();

      setLoadingTable(true);
      await dispatch(editAsyncUser({ ...row }, id));
      setLoadingTable(false);
      setEditRowKey('');
      message.success('Edit user success');
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const handleCancel = () => {
    setEditRowKey('');
  };

  const columns = [
    {
      title: 'Id',
      width: '50px',
      dataIndex: 'userId',
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',

      align: 'center',
      render: (_, record) => (
        <div className="img-avatar">
          {record.avatar === 'default.png' ? (
            <Avatar
              src={
                'https://media.istockphoto.com/id/474001724/photo/businessman-icon-as-avatar-or-default-profile-picture.webp?b=1&s=170667a&w=0&k=20&c=L4FWLBUJtbhwL27g11vhSg91bLNUsYsPG0cfWO1TUfU='
              }
            />
          ) : (
            <Avatar src={record.avatar} />
          )}
        </div>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      align: 'center',
      editTable: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      align: 'center',
      editTable: true,
    },
    {
      title: 'Admin',
      dataIndex: 'roles',
      align: 'center',
      render: roles =>
        roles[0].roleName === 'ROLE_ADMIN' ? (
          <div className="icon-role">
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          </div>
        ) : (
          <div className="icon-role">
            <CloseCircleTwoTone twoToneColor="red" />
          </div>
        ),
    },
    {
      title: 'Birthday',
      dataIndex: 'birthdate',
      align: 'center',
      editTable: true,
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      align: 'center',
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      align: 'center',
      width: 300,
      render: (_, item) => {
        const editTable = isEditing(item);
        return lists.length >= 1 ? (
          <Space>
            <Tooltip placement="top" title="view detail user">
              <Button disabled={editTable || editRowKey !== ''}>
                <FolderViewOutlined />
              </Button>
            </Tooltip>

            {editTable ? (
              <span>
                <Space size="middle">
                  {/* onClick={() => handleSave(item.key)} */}
                  <Button type="primary" style={{ marginRight: 8 }} onClick={() => handleSave(item.userId)}>
                    Save
                  </Button>
                  <Popconfirm title="Are sure to cancel ?" onConfirm={handleCancel}>
                    <Button danger type="primary">
                      Cancel
                    </Button>
                  </Popconfirm>
                </Space>
              </span>
            ) : (
              <Button disabled={editRowKey !== ''} type="primary" onClick={() => handleEdit(item)}>
                {/* edit */}
                <EditOutlined />
              </Button>
            )}

            <Popconfirm
              title="Delete the User"
              description="Are you sure to delete this User?"
              icon={
                <QuestionCircleOutlined
                  style={{
                    color: 'red',
                  }}
                />
              }
              onConfirm={() => handleDelete(item.userId)}
            >
              <Button danger type="primary" disabled={editTable || editRowKey !== ''}>
                <DeleteOutlined />
              </Button>
            </Popconfirm>
          </Space>
        ) : null;
      },
    },
  ];

  const mergedColumns = columns.map(col => {
    if (!col.editTable) {
      return col;
    }
    return {
      ...col,
      onCell: record => ({
        record,
        inputType: col.dataIndex === 'birthdate' ? 'date' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <StyledMainTable>
      <Card bordered={false} loading={loading}>
        <Form form={form} component={false}>
          <Table
            rowClassName="editable-row"
            columns={mergedColumns}
            dataSource={lists}
            rowKey="userId"
            scroll={{
              x: 1500,
              // y: 300,
            }}
            loading={loadingTable}
            tableLayout="fixed"
            components={{
              body: {
                cell: EditableCell,
              },
            }}
          ></Table>
        </Form>
      </Card>
    </StyledMainTable>
  );
};
