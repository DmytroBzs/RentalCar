import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Spin, Button, message } from 'antd';
import { fetchCarDetails } from '../../redux/cars/operations';
import CarHeader from '../../components/CarHeader/CarHeader';
import RentalConditions from '../../components/RentalConditions/RentalConditions';
import CarSpecs from '../../components/CarSpecs/CarSpecs';
import AccessoriesList from '../../components/AccessoriesList/AccessoriesList';
import UserCredentialsForm from '../../components/UserCredentialsForm/UserCredentialsForm';
import css from './CarDetailsPage.module.css';

const CarDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [car, setCar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCarData = async () => {
      try {
        setIsLoading(true);
        const response = await dispatch(fetchCarDetails(id));
        setCar(response.payload);
        setError(null);
      } catch (err) {
        setError(err.message || 'Failed to load car details');
        message.error('Failed to load car details');
      } finally {
        setIsLoading(false);
      }
    };

    loadCarData();
  }, [dispatch, id]);

  if (isLoading) return <Spin size="large" className={css.spinner} />;
  if (error) return <div className={css.error}>Error: {error}</div>;
  if (!car) return <div className={css.noCar}>Car not found</div>;

  return (
    <div className={css.container}>
      <div className={css.imageSection}>
        <img
          src={car.img || '/default-car-image.jpg'}
          alt={`${car.brand} ${car.model}`}
          className={css.carImage}
        />

        <UserCredentialsForm carId={car.id} rentalPrice={car.rentalPrice} />
      </div>

      <div className={css.detailsSection}>
        <CarHeader car={car} />
        <RentalConditions conditions={car.rentalConditions} />
        <CarSpecs car={car} />
        <AccessoriesList
          accessories={car.accessories}
          functionalities={car.functionalities}
        />
      </div>
    </div>
  );
};

export default CarDetailsPage;
