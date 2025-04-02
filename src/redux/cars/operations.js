import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://car-rental-api.goit.global';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async ({ page = 1, filters = {} }, thunkAPI) => {
    try {
      const params = {
        page,
        limit: 12,
        ...filters,
      };

      const response = await axios.get(`${BASE_URL}/cars`, { params });

      return {
        items: response.data.cars,
        total: response.data.totalCars,
        currentPage: Number(response.data.page),
        totalPages: response.data.totalPages,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCarDetails = createAsyncThunk(
  'cars/fetchCarDetails',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/cars/${id}`);
      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        return thunkAPI.rejectWithValue('Car not found');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchBrands = createAsyncThunk(
  'cars/fetchBrands',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/brands`);
      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        return thunkAPI.rejectWithValue('Brands not found');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
