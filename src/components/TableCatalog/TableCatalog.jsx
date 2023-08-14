import { Button, Card, Form, Table } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddCatalog } from './AddCatalog';
import { deleteAsyncCatalog } from '@/redux/catalog/catalogAction';

const StyledMainTableCatalog = styled.div``;

const columns = [
  {
    title: 'CatalogId',
    dataIndex: 'catalogId',
  },
  {
    title: 'CatalogName',
    dataIndex: 'catalogName',
  },
];

export const TableCatalog = ({ listCatalogs, loading }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [form] = Form.useForm();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [loadingTable, setLoadingTable] = useState(false);
  const dispatch = useDispatch();

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const handleReset = () => {
    setSelectedRowKeys([]);
  };

  const onClose = () => {
    setOpenDrawer(false);
    form.resetFields();
  };

  const start = async () => {
    setLoadingDelete(true);
    setLoadingTable(true);
    await dispatch(deleteAsyncCatalog(selectedRowKeys));
    setSelectedRowKeys([]);
    setLoadingDelete(false);
    setLoadingTable(false);
  };

  const onSelectChange = newSelectedRowKeys => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <>
      <StyledMainTableCatalog>
        <Card bordered={false} loading={loading}>
          <Form form={form} component={false}>
            <Table
              loading={loadingTable}
              title={() => (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Button type="primary" disabled={hasSelected} onClick={showDrawer} icon={<PlusOutlined />}>
                    Add Catalogs
                  </Button>
                  <Button type="primary" danger onClick={start} disabled={!hasSelected} loading={loadingDelete}>
                    Delete
                  </Button>
                  <span
                    style={{
                      marginLeft: 8,
                    }}
                  >
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                  </span>
                  <Button
                    style={{
                      marginLeft: 10,
                    }}
                    danger
                    onClick={handleReset}
                  >
                    Reset
                  </Button>
                </div>
              )}
              dataSource={listCatalogs}
              rowSelection={rowSelection}
              columns={columns}
              rowKey="catalogId"
            />
          </Form>
        </Card>
      </StyledMainTableCatalog>

      <AddCatalog setLoadingTable={setLoadingTable} open={openDrawer} onClose={onClose} form={form} />
    </>
  );
};
