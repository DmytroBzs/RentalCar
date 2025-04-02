import { Descriptions, Typography } from 'antd';
import css from './CarSpecs.module.css';
import { IoSettingsOutline } from 'react-icons/io5';
import { BsFuelPump } from 'react-icons/bs';
import { CalendarOutlined, CarOutlined } from '@ant-design/icons';

const { Title } = Typography;

const CarSpecs = ({ car }) => {
  return (
    <div className={css.container}>
      <Title level={4} className={css.title}>
        Car Specifications
      </Title>
      <Descriptions column={1} className={css.specsList}>
        <Descriptions.Item>
          <CalendarOutlined style={{ marginRight: 8 }} />
          Year: {car.year}
        </Descriptions.Item>
        <Descriptions.Item>
          <CarOutlined style={{ marginRight: 8 }} />
          Type: {car.type}
        </Descriptions.Item>
        <Descriptions.Item>
          <BsFuelPump style={{ marginRight: 8 }} />
          Fuel Consumption: {car.fuelConsumption} L/100km
        </Descriptions.Item>
        <Descriptions.Item>
          <IoSettingsOutline style={{ marginRight: 8 }} />
          Engine Size: {car.engineSize}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default CarSpecs;
