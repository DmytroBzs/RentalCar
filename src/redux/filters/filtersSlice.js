import { createSlice } from '@reduxjs/toolkit';

const loadFavoritesState = () => {
  try {
    const favoritesState = localStorage.getItem('favorites');
    return favoritesState ? JSON.parse(favoritesState) : [];
  } catch {
    return [];
  }
};

const saveFavoritesState = state => {
  try {
    localStorage.setItem('favorites', JSON.stringify(state));
  } catch (err) {
    console.error('Error saving favorites:', err);
  }
};

const initialState = {
  filters: {
    brand: '',
    rentalPrice: '',
    minMileage: '',
    maxMileage: '',
  },
  favorites: loadFavoritesState(),
  pagination: {
    page: 1,
    limit: 12,
    totalCars: 0,
    totalPages: 1,
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setBrandFilter: (state, action) => {
      state.filters.brand = action.payload;
    },
    setPriceFilter: (state, action) => {
      state.filters.rentalPrice = action.payload;
    },
    setMinMileageFilter: (state, action) => {
      state.filters.minMileage = action.payload;
    },
    setMaxMileageFilter: (state, action) => {
      state.filters.maxMileage = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination = {
        ...state.pagination,
        ...action.payload,
      };
    },
    resetFilters: state => {
      state.filters = initialState.filters;
      state.pagination.page = 1;
    },
    toggleFavorite: (state, action) => {
      const carId = action.payload;
      state.favorites = state.favorites.includes(carId)
        ? state.favorites.filter(id => id !== carId)
        : [...state.favorites, carId];
      saveFavoritesState(state.favorites);
    },

    setPage: (state, action) => {
      state.pagination.page = action.payload;
    },
  },
});

export const {
  setBrandFilter,
  setPriceFilter,
  setMinMileageFilter,
  setMaxMileageFilter,
  setPagination,
  resetFilters,
  toggleFavorite,
  setPage,
} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
