import { createSlice } from '@reduxjs/toolkit';
import { fetchCarDetails, fetchCars, fetchBrands } from './operations';

const initialState = {
  items: [],
  brands: [],
  isLoading: false,
  error: null,
  pagination: {
    currentPage: 1,
    totalPages: 1,
    hasMore: true,
  },
  currentCar: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    resetCarsState: () => initialState,

    resetCurrentCar: state => {
      state.currentCar = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items =
          action.meta.arg.page === 1
            ? action.payload.items
            : [...state.items, ...action.payload.items];
        state.pagination = {
          currentPage: action.meta.arg.page || 1,
          totalPages: Math.ceil(action.payload.total / 12),
          hasMore: action.payload.items && action.payload.items.length === 12,
        };
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchCarDetails.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCarDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentCar = action.payload;
      })
      .addCase(fetchCarDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.brands = action.payload;
      });
  },
});

export const { resetCarsState, resetCurrentCar } = carsSlice.actions;
export default carsSlice.reducer;
