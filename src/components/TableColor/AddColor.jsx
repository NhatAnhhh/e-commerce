import React from 'react';
import { Button, Drawer, Form, Input, Space, message } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addAsyncColor } from '@/redux/color/colorAction';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 4,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 20,
    },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 20,
      offset: 4,
    },
  },
};

export const AddColor = ({ setLoadingTable, open, onClose, form }) => {
  const dispatch = useDispatch();

  const onFinish = async values => {
    if (values.names === undefined) {
      message.error('Please click add filed');
      return;
    }

    const mapData = values.names.map(item => {
      return {
        name: item,
      };
    });
    setLoadingTable(true);
    await dispatch(addAsyncColor(mapData));
    onClose();
    setLoadingTable(false);
    message.success('Add colors success');
  };

  return (
    <>
      <Drawer
        title="Create Colors"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
      >
        <Form name="dynamic_form_item" {...formItemLayoutWithOutLabel} onFinish={onFinish} form={form}>
          <Form.List name="names">
            {(fields, { add, remove }, { errors }) => (
              <>
                {fields.map((field, index) => (
                  <Form.Item
                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    label={index === 0 ? 'Colors' : ''}
                    required={false}
                    key={field.key}
                  >
                    <Form.Item
                      {...field}
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message: 'Please input color name or delete this field.',
                        },
                      ]}
                      noStyle
                    >
                      <Input
                        placeholder="Color name"
                        style={{
                          width: '60%',
                        }}
                      />
                    </Form.Item>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined className="dynamic-delete-button" onClick={() => remove(field.name)} />
                    ) : null}
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    style={{
                      width: '60%',
                    }}
                    icon={<PlusOutlined />}
                  >
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button type="primary" danger onClick={onClose}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};
