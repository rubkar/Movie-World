import { IMovieResponse } from './movie.types';

export const MovieService = {
  getMovies: async (searchTerm = ''): Promise<IMovieResponse> => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}&s=${searchTerm}`);
    const data = await res.json();
    return data;
  },
};
