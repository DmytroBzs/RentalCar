import { Button, Typography } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleFavorite } from '../../redux/filters/filtersSlice';
import css from './CarItem.module.css';

const { Text } = Typography;

const CarItem = ({ car }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector(state => state.filter.favorites);
  const isFavorite = favorites.includes(car.id);

  const formatAddress = address => {
    if (!address) return '';
    const parts = address.split('|').map(part => part.trim());
    return parts.join(' | ');
  };

  const handleToggleFavorite = e => {
    e.stopPropagation();
    dispatch(toggleFavorite(car.id));
  };

  const handleReadMore = () => {
    navigate(`/catalog/${car.id}`);
  };

  return (
    <div className={css.card}>
      <div className={css.imageWrapper}>
        <img
          src={car.img || '/default-car-image.jpg'}
          alt={`${car.brand} ${car.model}`}
          className={css.image}
          onError={e => {
            e.target.src = '/default-car-image.jpg';
          }}
        />
        <button
          className={css.heartIcon}
          onClick={handleToggleFavorite}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? (
            <HeartFilled style={{ color: '#3470FF' }} />
          ) : (
            <HeartOutlined style={{ color: '#fff' }} />
          )}
        </button>
      </div>

      <div className={css.content}>
        <div className={css.header}>
          <div className={css.titleWrapper}>
            <Text className={css.title}>
              {car.brand} <span className={css.model}>{car.model}</span>,{' '}
              {car.year}
            </Text>
            <Text className={css.price}>${car.rentalPrice}</Text>
          </div>
        </div>

        <Text className={css.meta}>{formatAddress(car.address)}</Text>

        <Text className={css.specs}>
          {car.type} | {car.mileage.toLocaleString('en-US').replace(/,/g, ' ')}{' '}
          km
        </Text>

        <Button type="primary" className={css.button} onClick={handleReadMore}>
          Read more
        </Button>
      </div>
    </div>
  );
};

export default CarItem;
