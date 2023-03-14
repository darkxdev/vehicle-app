import { fetchCars, carsSlice } from './carsSlice';

//Unit testing
describe('carsSlice', () => {
  const initialState = {
    cars: [],
    status: 'idle',
  };

  it('should handle fetchCars.pending', () => {
    const action = { type: fetchCars.pending.type };
    const state = carsSlice.reducer(initialState, action);
    expect(state.status).toBe('loading');
  });

  it('should handle fetchCars.fulfilled', () => {
    const payload = {
      count: 2,
      results: [
        { MakeId: '1', MakeName: 'Toyota' },
        { MakeId: '2', MakeName: 'Honda' },
      ],
    };
    const action = { type: fetchCars.fulfilled.type, payload };
    const state = carsSlice.reducer(initialState, action);
    expect(state.status).toBe('succeeded');
    expect(state.cars).toEqual(payload.results);
  });

  it('should handle fetchCars.rejected', () => {
    const action = { type: fetchCars.rejected.type };
    const state = carsSlice.reducer(initialState, action);
    expect(state.status).toBe('error');
  });
});
