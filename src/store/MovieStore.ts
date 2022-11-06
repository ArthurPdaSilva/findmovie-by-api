import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import MovieType from '../types/MovieType';

const movieProvider = createSlice({
  name: 'movieList',
  initialState: {
    movieList: [] as MovieType[],
  },
  reducers: {
    addMovie(state, action: PayloadAction<MovieType[]>) {
      return {
        ...state,
        movieList: action.payload,
      };
    },
  },
});

export const { addMovie } = movieProvider.actions;
export default movieProvider.reducer;
