import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchParts = createAsyncThunk(
  'parts/fetchParts',
  async () => {
    const response = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetParts?format=json');
    const { Count: count, Results: results } = response.data;
    return { count, results };
  },
);

const partsSlice = createSlice({
  name: 'parts',
  initialState: {
    parts: [],
    status: 'idle',
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchParts.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchParts.fulfilled, (state, action) => ({
        ...state,
        count: action.payload.count,
        parts: action.payload.results,
        status: 'succeeded',
      }))
      .addCase(fetchParts.rejected, (state) => ({
        ...state,
        status: 'error',
      }));
  },
});

export { fetchParts, partsSlice };
