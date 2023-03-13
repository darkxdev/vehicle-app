import { configureStore } from '@reduxjs/toolkit';
import { makesSlice } from './makesSlice';
import { manufacturersSlice } from './manufacturersSlice';

const store = configureStore({
  reducer: {
    makes: makesSlice.reducer,
    manufacturers: manufacturersSlice.reducer,
  },
});

export default store;
