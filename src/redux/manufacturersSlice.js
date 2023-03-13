import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchManufacturers = createAsyncThunk(
  'manufacturers/fetchManufacturers',
  async () => {
    const response = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json');
    const results = response.data.Results;
    return results;
  },
);

const manufacturersSlice = createSlice({
  name: 'manufaturers',
  initialState: {
    manufacturers: [],
    status: 'idle',
  },
  reducers: {
    filterManufacturers: () => {
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchManufacturers.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchManufacturers.fulfilled, (state, action) => ({
        ...state,
        manufacturers: action.payload,
        status: 'succeeded',
      }))
      .addCase(fetchManufacturers.rejected, (state) => ({
        ...state,
        status: 'error',
      }));
  },
});

export { fetchManufacturers, manufacturersSlice };
