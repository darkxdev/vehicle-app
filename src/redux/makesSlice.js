import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchMakes = createAsyncThunk(
  'makes/fetchMakes',
  async () => {
    const response = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json');
    const { Count: count, Results: results } = response.data;
    return { count, results };
  },
);

const makesSlice = createSlice({
  name: 'makes',
  initialState: {
    makes: [],
    status: 'idle',
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMakes.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchMakes.fulfilled, (state, action) => ({
        ...state,
        count: action.payload.count,
        makes: action.payload.results,
        status: 'succeeded',
      }))
      .addCase(fetchMakes.rejected, (state) => ({
        ...state,
        status: 'error',
      }));
  },
});

export { fetchMakes, makesSlice };
