import { configureStore } from '@reduxjs/toolkit';
import { makesSlice } from './makesSlice';
import { manufacturersSlice } from './manufacturersSlice';
import { partsSlice } from './partsSlice';

const store = configureStore({
  reducer: {
    makes: makesSlice.reducer,
    manufacturers: manufacturersSlice.reducer,
    parts: partsSlice.reducer,
  },
});

export default store;
