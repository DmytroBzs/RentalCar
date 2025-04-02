import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import carsReducer from './cars/carsSlice';
import { filterReducer } from './filters/filtersSlice';

const carsPersistConfig = {
  key: 'cars',
  storage,
  whitelist: ['items', 'pagination'],
};

const filterPersistConfig = {
  key: 'filter',
  storage,
  whitelist: ['favorites'],
};

const persistedCarsReducer = persistReducer(carsPersistConfig, carsReducer);
const persistedFilterReducer = persistReducer(
  filterPersistConfig,
  filterReducer
);

export const store = configureStore({
  reducer: {
    cars: persistedCarsReducer,
    filter: persistedFilterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
