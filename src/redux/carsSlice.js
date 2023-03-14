import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async () => {
    const response = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');
    const { Count: count, Results: results } = response.data;
    return { count, results };
  },
);

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    status: 'idle',
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchCars.fulfilled, (state, action) => ({
        ...state,
        count: action.payload.count,
        makes: action.payload.results,
        status: 'succeeded',
      }))
      .addCase(fetchCars.rejected, (state) => ({
        ...state,
        status: 'error',
      }));
  },
});

export { fetchCars, carsSlice };
