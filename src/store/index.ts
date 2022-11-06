import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './MovieStore';

const store = configureStore({
  reducer: {
    movieProvider: movieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
