import { Link } from 'react-router-dom';
import { Typography, Button } from 'antd';
import css from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <div className={css.hero}>
      <Typography.Title level={1} className={css.title}>
        Find your perfect rental car
      </Typography.Title>
      <Typography.Text className={css.subtitle}>
        Reliable and budget-friendly rentals for any journey
      </Typography.Text>
      <Link to="/catalog">
        <Button className={css.btn} type="primary" size="large">
          View Catalog
        </Button>
      </Link>
    </div>
  );
};

export default HeroSection;
