import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchManufacturers = createAsyncThunk(
  'manufacturers/fetchManufacturers',
  async () => {
    const response = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json');
    const { Count: count, Results: results } = response.data;
    return { count, results };
  },
);

const manufacturersSlice = createSlice({
  name: 'manufacturers',
  initialState: {
    manufacturers: [],
    status: 'idle',
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchManufacturers.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchManufacturers.fulfilled, (state, action) => ({
        ...state,
        count: action.payload.count,
        manufacturers: action.payload.results,
        status: 'succeeded',
      }))
      .addCase(fetchManufacturers.rejected, (state) => ({
        ...state,
        status: 'error',
      }));
  },
});

export { fetchManufacturers, manufacturersSlice };
