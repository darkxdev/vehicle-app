import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchMotos = createAsyncThunk(
  'motos/fetchMotos',
  async () => {
    const response = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/moto?format=json');
    const { Count: count, Results: results } = response.data;
    return { count, results };
  },
);

const motosSlice = createSlice({
  name: 'motos',
  initialState: {
    motos: [],
    status: 'idle',
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMotos.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchMotos.fulfilled, (state, action) => ({
        ...state,
        count: action.payload.count,
        makes: action.payload.results,
        status: 'succeeded',
      }))
      .addCase(fetchMotos.rejected, (state) => ({
        ...state,
        status: 'error',
      }));
  },
});

export { fetchMotos, motosSlice };
