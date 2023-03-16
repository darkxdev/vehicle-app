import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchTrucks = createAsyncThunk(
  'trucks/fetchTrucks',
  async () => {
    const response = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/truck?format=json');
    const { Count: count, Results: results } = response.data;
    return { count, results };
  },
);

const trucksSlice = createSlice({
  name: 'trucks',
  initialState: {
    trucks: [],
    status: 'idle',
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrucks.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchTrucks.fulfilled, (state, action) => ({
        ...state,
        count: action.payload.count,
        trucks: action.payload.results,
        status: 'succeeded',
      }))
      .addCase(fetchTrucks.rejected, (state) => ({
        ...state,
        status: 'error',
      }));
  },
});

export { fetchTrucks, trucksSlice };
