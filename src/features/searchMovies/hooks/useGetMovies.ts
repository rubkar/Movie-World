import { useEffect, useState } from 'react';
import { MovieService } from '../../../services/movie/movie.service';
import { IMovie } from '../../../services/movie/movie.types';

export const useGetMovies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [sortedMovies, setSortedMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    setMovies(sortedMovies);
  }, [sortedMovies]);

  useEffect(() => {
    searchMovies('Batman');
  }, []);

  const searchMovies = async (title: string) => {
    try {
      const { Search } = await MovieService.getMovies(title);

      setMovies(Search);
    } catch (error) {
      console.log(error);
    }
  };

  const sortMovies = () => {
    const sortedMovies = movies.sort((a, b) => Number(a.Year) - Number(b.Year));
    setSortedMovies(sortedMovies);
  };

  return { movies, searchTerm, setSearchTerm, searchMovies, sortMovies };
};
