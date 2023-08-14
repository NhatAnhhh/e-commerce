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
  InputNumber,
  Select,
} from 'antd';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Icon, {
  QuestionCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { current } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { editAsyncUser } from '@/redux/user/userAction';

import { useNavigate } from 'react-router-dom';
import { deleteAsyncProduct, editAsyncProduct, fetchAsyncGetAllProducts } from '@/redux/product/productAction';
import Excel from '../Excel';
import { DownloadOutlined } from '@ant-design/icons';
import { formatMoney } from '@/utils/formatMoney';
import Highlighter from 'react-highlight-words';
import { useRef } from 'react';

const StyledMainTableProduct = styled.div`
  .layout-img {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .wrap-img {
    width: 100px;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const StyledColorChoose = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 5px;
  background-color: ${props => props.color};
`;

const StyledWrapperFilter = styled.div`
  display: flex;
  gap: 30px;
  input {
    width: 500px;
  }
  .wrap-sort {
    display: flex;
  }
`;

const EditableCell = ({ editing, dataIndex, title, inputType, record, index, children, ...restProps }) => {
  let inputNode = '';
  switch (inputType) {
    case 'number':
      inputNode = <InputNumber />;
      break;
    case 'selectSize':
      inputNode = (
        <Select
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder="Please select"
          options={restProps.sizeoptions}
        />
      );
      break;
    case 'selectColor':
      inputNode = (
        <Select
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder="Please select"
          options={restProps.coloroptions}
        />
      );
      break;
    case 'selectCatalog':
      inputNode = (
        <Select allowClear style={{ width: '100%' }} placeholder="Please select" options={restProps.catalogoptions} />
      );
      break;
    case 'selectLength':
      inputNode = (
        <Select allowClear style={{ width: '100%' }} placeholder="Please select" options={restProps.lengthoptions} />
      );
      break;
    default:
      inputNode = <Input />;
      break;
  }

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

export const TableProduct = ({ loading, setLoadingTable, loadingTable, listAllProducts }) => {
  const [editRowKey, setEditRowKey] = useState('');
  const [sortedInfo, setSortedInfo] = useState({});

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const listColors = useSelector(state => state.color.listColors);
  const listSizes = useSelector(state => state.size.listSizes);
  const listCatalogs = useSelector(state => state.catalog.listCatalogs);
  const listLengths = useSelector(state => state.length.listLengths);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const isEditing = record => record.id === editRowKey;

  const sizeOptions = listSizes.map(item => {
    return {
      label: item.name,
      value: item.id,
    };
  });

  const catalogOptions = listCatalogs.map(item => {
    return {
      label: item.catalogName,
      value: item.catalogId,
    };
  });

  const lengthOptions = listLengths.map(item => {
    return {
      label: item.name,
      value: item.id,
    };
  });

  const plainOptions = listColors.map(item => {
    return {
      label: <StyledColorChoose key={item.id} color={item.name}></StyledColorChoose>,
      value: item.id,
    };
  });

  const handleEdit = record => {
    form.setFieldsValue({
      name: record.name,
      price: record.price,
      detail: record.detail,
      catalog: record.catalogID,
      sizes: record.sizesID,
      colors: record.colorsID,
      length: record.lengthIDX,
    });

    setEditRowKey(record.id);
  };

  const handleDelete = async id => {
    setLoadingTable(true);
    await dispatch(deleteAsyncProduct(id));
    setLoadingTable(false);
    message.success('Delete Product Success');
  };

  const handleSave = async item => {
    try {
      const row = await form.validateFields();
      const formData = new FormData();
      formData.append('name', row.name);
      formData.append('detail', row.detail);
      formData.append('catalogID', row.catalog);
      formData.append('lengthIDX', row.length);
      formData.append('price', row.price);

      row.colors &&
        row.colors.forEach(element => {
          formData.append('colorsID', element);
        });

      row.sizes &&
        row.sizes.forEach(element => {
          formData.append('sizesID', element);
        });

      setLoadingTable(true);
      await dispatch(editAsyncProduct(formData, item));
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

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={e => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const dataColumn = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 100,
      fixed: 'left',
      align: 'center',
    },
    {
      title: 'Name Product',
      dataIndex: 'name',
      align: 'center',
      editTable: true,
      width: 200,
      ...getColumnSearchProps('name'),
      sorter: (a, b) => a.name.length - b.name.length,
      ellipsis: true,
    },
    {
      title: 'Images',
      dataIndex: 'listImage',
      align: 'center',
      width: 300,
      render: function (item) {
        return (
          <div key={item.id} className="layout-img">
            {item.map(element => {
              return (
                <div key={element.id} className="wrap-img">
                  <img src={element.path} alt="default-img" />
                </div>
              );
            })}
          </div>
        );
      },
    },
    {
      title: 'Price',
      dataIndex: 'price',
      align: 'center',
      sorter: (a, b) => a.price - b.price,
      editTable: true,
      render: function (item) {
        return <div>{formatMoney(item)}</div>;
      },
    },
    {
      title: 'Quantity',
      dataIndex: 'totalQuantity',
      align: 'center',
    },

    {
      title: 'Detail',
      dataIndex: 'detail',
      align: 'center',
      editTable: true,
    },
    {
      title: 'Brand',
      dataIndex: 'catalog',
      align: 'center',
      editTable: true,
      render: function (item) {
        return <Tag key={item.catalogId}> {item.catalogName.toUpperCase()} </Tag>;
      },
    },
    {
      title: 'Length',
      dataIndex: 'length',
      align: 'center',

      editTable: true,
      render: function (item) {
        return <Tag key={item.id}> {item.name.toUpperCase()} </Tag>;
      },
    },
    {
      title: 'Sizes',
      dataIndex: 'sizes',
      align: 'center',
      width: '50px',
      editTable: true,
      render: function (item) {
        return (
          <div className="layout-img">
            {item.map(element => {
              return <Tag key={element.id}> {element.name.toUpperCase()} </Tag>;
            })}
          </div>
        );
      },
    },

    {
      title: 'Colors',
      dataIndex: 'colors',
      align: 'center',
      width: '80px',
      editTable: true,
      render: function (item) {
        return (
          <Space key={item.id} size={[0, 8]} wrap>
            {item.map(element => {
              return (
                <Tag key={element.id} color={element.name}>
                  {element.name.toUpperCase()}
                </Tag>
              );
            })}
          </Space>
        );
      },
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      align: 'center',
      width: 300,
      render: (_, item) => {
        const editTable = isEditing(item);
        return listAllProducts.length >= 1 ? (
          <Space>
            {editTable ? (
              <span>
                <Space size="middle">
                  <Button type="primary" style={{ marginRight: 8 }} onClick={() => handleSave(item.id)}>
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
              title="Delete the Product"
              description="Are you sure to delete this Product?"
              icon={
                <QuestionCircleOutlined
                  style={{
                    color: 'red',
                  }}
                />
              }
              onConfirm={() => handleDelete(item.id)}
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

  const mergedColumns = dataColumn.map(col => {
    let type = '';

    if (!col.editTable) {
      return col;
    }

    if (col.dataIndex === 'price') {
      type = 'number';
    } else if (col.dataIndex === 'sizes') {
      type = 'selectSize';
    } else if (col.dataIndex === 'colors') {
      type = 'selectColor';
    } else if (col.dataIndex === 'catalog') {
      type = 'selectCatalog';
    } else if (col.dataIndex === 'length') {
      type = 'selectLength';
    } else if (col.dataIndex === 'listImage') {
      type = 'upload';
    } else {
      type = 'text';
    }

    return {
      ...col,
      onCell: record => ({
        record,
        sizeoptions: sizeOptions,
        catalogoptions: catalogOptions,
        lengthoptions: lengthOptions,
        coloroptions: plainOptions,
        inputType: type,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
  };

  const clearAll = () => {
    setSearchText('');
  };

  return (
    <StyledMainTableProduct>
      <Card bordered={false} loading={loading}>
        <Form form={form} component={false} name="validate_other">
          <Table
            title={() => (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Button type="primary" icon={<PlusOutlined />} onClick={() => navigate('/admin/product/form')}>
                  Add Product
                </Button>

                <StyledWrapperFilter>
                  <div className="wrap-sort">
                    <Button onClick={clearAll}>Clear filters</Button>
                    <Button>Clear filters and sorters</Button>
                  </div>
                </StyledWrapperFilter>
                <Excel
                  fileName="export-product"
                  data={[
                    {
                      columns: [
                        {
                          title: 'Product Id',
                          dataIndex: 'id',
                          width: 5,
                        },
                        {
                          title: 'Name',
                          dataIndex: 'name',
                          width: 20,
                        },
                        {
                          title: 'Price',
                          dataIndex: 'price',
                          width: 50,
                        },
                        {
                          title: 'TotalQuantity',
                          dataIndex: 'totalQuantity',
                          width: 50,
                        },
                      ],
                      data: listAllProducts,
                      tabName: 'info',
                    },
                  ]}
                >
                  <Button icon={<DownloadOutlined />} style={{ backgroundColor: '#c2115e', color: '#fff' }}>
                    Export
                  </Button>
                </Excel>
              </div>
            )}
            bordered
            footer={() => 'Footer'}
            rowClassName="editable-row"
            dataSource={listAllProducts}
            rowKey="id"
            scroll={{
              x: 1500,
              // y: 300,
            }}
            columns={mergedColumns}
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
    </StyledMainTableProduct>
  );
};
