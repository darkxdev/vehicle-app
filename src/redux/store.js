import { configureStore } from '@reduxjs/toolkit';
import { makesSlice } from './makesSlice';
import { manufacturersSlice } from './manufacturersSlice';
import { partsSlice } from './partsSlice';
import { carsSlice } from './carsSlice';
import { motosSlice } from './motosSlice';
import { trucksSlice } from './trucksSlice';

const store = configureStore({
  reducer: {
    makes: makesSlice.reducer,
    manufacturers: manufacturersSlice.reducer,
    parts: partsSlice.reducer,
    cars: carsSlice.reducer,
    motos: motosSlice.reducer,
    trucks: trucksSlice.reducer,
  },
});

export default store;
