import {
  Card,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Typography,
  Divider,
  Upload,
  Button,
  message,
} from 'antd';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { styled } from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import ImgCrop from 'antd-img-crop';
import { addAsyncProduct } from '@/redux/product/productAction';
import { useNavigate } from 'react-router-dom';

const StyledCreateProduct = styled.div`
  padding: 0 38px !important;
  label {
    margin-right: 20px;
  }
  .ant-checkbox-wrapper {
    display: flex;
    align-items: center;
  }
`;

const StyledColorChoose = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 5px;
  background-color: ${props => props.color};
`;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const { TextArea } = Input;

export const FormCreateProduct = () => {
  const [loading, setLoading] = useState(true);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const listColors = useSelector(state => state.color.listColors);
  const listSizes = useSelector(state => state.size.listSizes);
  const listCatalogs = useSelector(state => state.catalog.listCatalogs);
  const listLengths = useSelector(state => state.length.listLengths);

  const [checkedList, setCheckedList] = useState([1]);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const sizeOptions = listSizes.map(item => {
    return {
      label: item.name,
      value: item.id,
    };
  });

  const lengthOptions = listLengths.map(item => {
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

  const plainOptions = listColors.map(item => {
    return {
      label: <StyledColorChoose color={item.name}></StyledColorChoose>,
      value: item.id,
    };
  });

  const plainOptions1 = listColors.map(item => item.id);

  // mock timer to mimic dashboard data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(undefined);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const onChangeUpload = e => {
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

  const onChange = list => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };
  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? plainOptions1 : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const handleOnClickFinish = async () => {
    const values = form.getFieldsValue();

    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('catalogID', values.catalog);
    formData.append('lengthIDX', values.length);
    formData.append('price', values.price);
    formData.append('totalQuantity', values.quantity);
    formData.append('description', 'des1234');
    formData.append('detail', values.detail);

    values.selectSizes &&
      values.selectSizes.forEach(element => {
        formData.append('sizesID', element);
      });

    fileList.forEach(item => {
      formData.append('files', item.originFileObj);
    });
    checkedList.forEach(item => {
      formData.append('colorsID', item);
    });

    const res = await dispatch(addAsyncProduct(formData));

    form.resetFields();
    setFileList([]);
    setCheckedList([1]);
    message.success('add product success');
    navigate('/admin/product/list');
  };

  return (
    <StyledCreateProduct>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Form Add Product</title>
      </Helmet>
      <Typography.Title level={3}>Form Add Product</Typography.Title>
      <Row gutter={[12, 12]}>
        <Col span={24}>
          <Card bordered={false} loading={loading}>
            <Form
              size={'large'}
              form={form}
              component={false}
              name="validate_other"
              {...formItemLayout}
              // initialValues={{
              //   selectSizes: sizeOptions,
              // }}
            >
              <Form.Item
                name="name"
                label="Name"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please enter your name product!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Divider />
              <Form.Item name="catalog" label="Brand">
                <Select style={{ width: '200px' }} options={catalogOptions} />
              </Form.Item>
              <Divider />

              <Form.Item name="length" label="Length">
                <Select style={{ width: '200px' }} options={lengthOptions} />
              </Form.Item>
              <Divider />
              <Form.Item name="price" label="Price">
                <InputNumber style={{ width: '200px' }} />
              </Form.Item>
              <Divider />
              <Form.Item name="quantity" label="Quantity">
                <InputNumber style={{ width: '200px' }} />
              </Form.Item>
              <Divider />
              <Form.Item name="colors" label="Colors">
                <div>
                  <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                    Check all
                  </Checkbox>
                  <Divider />
                  <Checkbox.Group options={plainOptions} value={checkedList} onChange={onChange} />
                </div>
              </Form.Item>
              <Divider />
              <Form.Item
                name="selectSizes"
                label="Select Sizes"
                rules={[{ required: true, message: 'Please select your Sizes!', type: 'array' }]}
              >
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: '100%' }}
                  placeholder="Please select"
                  // onChange={handleChangeSizes}
                  options={sizeOptions}
                />
              </Form.Item>

              <Divider />
              <Form.Item name="detail" label="Detail">
                <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
              </Form.Item>

              <Form.Item label="Images" name="files">
                {/* <ImgCrop showGrid rotationSlider aspectSlider showReset> */}
                <Upload
                  beforeUpload={() => false}
                  fileList={fileList}
                  onChange={onChangeUpload}
                  onPreview={onPreview}
                  listType="picture-card"
                  multiple
                  // maxCount={1}
                >
                  {fileList.length < 5 && '+ Upload'}
                </Upload>
                {/* </ImgCrop> */}
              </Form.Item>
              <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                <Button type="primary" onClick={handleOnClickFinish}>
                  Submit
                </Button>
                <Button onClick={() => navigate('/admin/product/list')}>Back List</Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </StyledCreateProduct>
  );
};
