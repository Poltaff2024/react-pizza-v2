import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})