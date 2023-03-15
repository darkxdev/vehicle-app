import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchCars, carsSlice } from './carsSlice';

jest.mock('axios');

describe('carsSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        cars: carsSlice.reducer,
      },
    });
  });

  test('should fetch cars', async () => {
    const mockData = {
      Count: 2,
      Results: [
        { Make_ID: 1, Make_Name: 'Toyota' },
        { Make_ID: 2, Make_Name: 'Honda' },
      ],
    };
    axios.get.mockResolvedValueOnce({ data: mockData });

    await store.dispatch(fetchCars());
    const state = store.getState().cars;

    expect(state.status).toBe('succeeded');
    expect(state.cars).toEqual(mockData.Results);
  });
});
