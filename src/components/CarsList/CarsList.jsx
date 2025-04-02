import css from './CarsList.module.css';
import CarItem from '../CarItem/CarItem';
import Loader from '../Loader/Loader';

const CarsList = ({ cars = [], isLoading = false }) => {
  if (isLoading && cars.length === 0) {
    return (
      <div className={css.loading}>
        <Loader />
      </div>
    );
  }

  if (!cars || cars.length === 0) {
    return <div className={css.noResults}>No cars found</div>;
  }

  return (
    <div className={css.list}>
      {cars.map(car => (
        <CarItem key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarsList;
