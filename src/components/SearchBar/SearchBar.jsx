import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Select, Button, Row, Col } from 'antd';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import { selectBrands, selectIsLoading } from '../../redux/cars/selectors';
import { fetchBrands } from '../../redux/cars/operations';
import {
  setBrandFilter,
  setPriceFilter,
  setMinMileageFilter,
  setMaxMileageFilter,
  setPage,
} from '../../redux/filters/filtersSlice';
import css from './SearchBar.module.css';

const { Option } = Select;

const priceOptions = [30, 40, 50, 60, 70, 80];

const dropdownIconStyle = {
  transition: 'transform 0.3s',
};

const SearchBar = ({ onSearch }) => {
  const [form] = Form.useForm();
  const [openBrand, setOpenBrand] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const dispatch = useDispatch();

  const brands = useSelector(selectBrands);
  const isLoading = useSelector(selectIsLoading);
  const filters = useSelector(state => state.filter.filters);

  useEffect(() => {
    if (brands.length === 0) {
      dispatch(fetchBrands());
    }
  }, [brands.length, dispatch]);

  useEffect(() => {
    form.setFieldsValue({
      brand: filters.brand,
      price: filters.rentalPrice,
      mileageFrom: filters.minMileage,
      mileageTo: filters.maxMileage,
    });
  }, [filters, form]);

  const handleSubmit = values => {
    dispatch(setBrandFilter(values.brand || ''));
    dispatch(setPriceFilter(values.price || ''));
    dispatch(setMinMileageFilter(values.mileageFrom || ''));
    dispatch(setMaxMileageFilter(values.mileageTo || ''));
    dispatch(setPage(1));

    if (onSearch) {
      onSearch({
        brand: values.brand,
        price: values.price,
        mileageFrom: values.mileageFrom,
        mileageTo: values.mileageTo,
      });
    }
  };

  const renderDropdownIcon = isOpen => (
    <DownOutlined
      style={{
        ...dropdownIconStyle,
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      }}
    />
  );

  return (
    <div className={css.searchContainer}>
      <Form
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        className="car-filter-form"
        style={{ width: '924px' }}
      >
        <Row gutter={16}>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="brand" label="Choose a brand">
              <Select
                placeholder="Select brand"
                loading={isLoading}
                onDropdownVisibleChange={setOpenBrand}
                suffixIcon={renderDropdownIcon(openBrand)}
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                allowClear
              >
                {brands.map(brand => (
                  <Option key={brand} value={brand}>
                    {brand}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Form.Item name="price" label="Price / 1 hour">
              <Select
                placeholder="Select price range"
                onDropdownVisibleChange={setOpenPrice}
                suffixIcon={renderDropdownIcon(openPrice)}
                allowClear
              >
                {priceOptions.map(price => (
                  <Option key={price} value={price}>
                    {price}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Form.Item label="Car mileage / km">
              <Row gutter={8}>
                <Col span={12}>
                  <Form.Item name="mileageFrom">
                    <Input placeholder="From" type="number" min={0} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="mileageTo">
                    <Input placeholder="To" type="number" min={0} />
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Form.Item label=" " colon={false}>
              <Button type="primary" htmlType="submit" block>
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
