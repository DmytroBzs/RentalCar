import React from 'react';
import { Form, Input, Select, Button, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Option } = Select;

const SearchBar = () => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values:', values);
  };

  return (
    <div className="search-bar-container">
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        className="car-filter-form"
        style={{ width: '924px' }}
      >
        <Row gutter={16}>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="brand" label="Choose a brand">
              <Select placeholder="Select brand">
                <Option value="aston-martin">Aston Martin</Option>
                <Option value="audi">Audi</Option>
                <Option value="bmw">BMW</Option>
                <Option value="bentley">Bentley</Option>
                <Option value="buick">Buick</Option>
                <Option value="chevrolet">Chevrolet</Option>
                <Option value="chrysler">Chrysler</Option>
                <Option value="gmc">GMC</Option>
                <Option value="hummer">Hummer</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Form.Item name="price" label="Price / 1 hour">
              <Select placeholder="Select price range">
                <Option value="30">$30</Option>
                <Option value="40">$40</Option>
                <Option value="50">$50</Option>
                <Option value="60">$60</Option>
                <Option value="70">$70</Option>
                <Option value="80">$80</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Form.Item label="Car mileage / km">
              <Row gutter={8}>
                <Col span={12}>
                  <Form.Item name="mileageFrom">
                    <Input placeholder="From" type="number" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="mileageTo">
                    <Input placeholder="To" type="number" />
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Form.Item label=" " colon={false}>
              <Button
                type="primary"
                htmlType="submit"
                icon={<SearchOutlined />}
                block
              >
                Search
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchBar;
