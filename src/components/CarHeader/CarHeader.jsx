import { Typography, Image } from 'antd';
import { IoLocationOutline } from 'react-icons/io5';
import css from './CarHeader.module.css';

const { Title, Text, Paragraph } = Typography;

const CarHeader = ({ car }) => {
  const formatAddress = address => {
    if (!address) return '';

    const parts = address.split(',').map(part => part.trim());

    return parts.slice(-2).join(', ');
  };
  return (
    <div className={css.header}>
      <div className={css.title}>
        <Title level={2} className={css.title} style={{ margin: 0 }}>
          {car.brand} {car.model}, {car.year}
        </Title>
        <Text type="secondary"> Id: {car.id.slice(0, 4)}</Text>
      </div>
      <div className={css.subtitle}>
        <Text strong>
          <IoLocationOutline />
          {formatAddress(car.address)}
        </Text>
        <Text strong>Mileage: {car.mileage.toLocaleString()} km</Text>
      </div>
      <Title level={2} style={{ color: '#3470FF', marginTop: 16 }}>
        ${car.rentalPrice}
      </Title>
      {car.description && (
        <Paragraph className={css.description}>{car.description}</Paragraph>
      )}
    </div>
  );
};

export default CarHeader;
