import { configureStore } from '@reduxjs/toolkit';
import { manufacturersSlice } from './manufacturersSlice';

const store = configureStore({
  reducer: {
    manufacturers: manufacturersSlice.reducer,
  },
});

export default store;
