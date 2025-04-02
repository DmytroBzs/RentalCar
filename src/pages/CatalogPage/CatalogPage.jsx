import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import CarsList from '../../components/CarsList/CarsList';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import Loader from '../../components/Loader/Loader';
import { fetchCars } from '../../redux/cars/operations';
import {
  selectCars,
  selectIsLoading,
  selectError,
  selectHasMore,
  selectCurrentPage,
} from '../../redux/cars/selectors';
import { resetCarsState } from '../../redux/cars/carsSlice';
import { selectFilters } from '../../redux/filters/selectors';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const hasMore = useSelector(selectHasMore);
  const currentPage = useSelector(selectCurrentPage);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchCars({ page: 1, filters }));
  }, [dispatch, filters]);

  const handleLoadMore = () => {
    dispatch(fetchCars({ page: currentPage + 1, filters }));
  };

  const handleSearch = filters => {
    dispatch(resetCarsState());
    dispatch(fetchCars({ page: 1, filters }));
  };

  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />

      {error && <div className={css.error}>Error: {error}</div>}

      <CarsList cars={cars} isLoading={isLoading} />

      {hasMore && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}

      {isLoading && <Loader />}
    </div>
  );
};

export default CatalogPage;
