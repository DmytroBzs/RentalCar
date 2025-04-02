import { createSelector } from '@reduxjs/toolkit';

export const selectCarsState = state => state.cars;

export const selectCars = state => selectCarsState(state).items;
export const selectBrands = state => selectCarsState(state).brands;
export const selectIsLoading = state => selectCarsState(state).isLoading;
export const selectError = state => selectCarsState(state).error;

export const selectPagination = state => selectCarsState(state).pagination;
export const selectCurrentPage = state => selectPagination(state).currentPage;
export const selectHasMore = state => selectPagination(state).hasMore;

export const selectCurrentCar = state => selectCarsState(state).currentCar;

export const selectFilteredCars = createSelector(
  [selectCars, (_, filters) => filters],
  (cars, filters = {}) => {
    if (!filters || Object.keys(filters).length === 0) return cars;

    return cars.filter(car => {
      const matchesBrand = !filters.brand || car.make === filters.brand;
      const matchesPrice =
        !filters.price || Number(car.rentalPrice) <= Number(filters.price);
      const matchesMileageFrom =
        !filters.mileageFrom || car.mileage >= Number(filters.mileageFrom);
      const matchesMileageTo =
        !filters.mileageTo || car.mileage <= Number(filters.mileageTo);

      return (
        matchesBrand && matchesPrice && matchesMileageFrom && matchesMileageTo
      );
    });
  }
);
