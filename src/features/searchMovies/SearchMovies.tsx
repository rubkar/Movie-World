import { FC } from 'react';
import { MovieCard } from '../../components/MovieCard';
import { useGetMovies } from './hooks/useGetMovies';
import { SearchInput } from './SearchInput/SearchInput';

import './SearchMovies.css';

export const SearchMovies: FC = () => {
  const { movies, searchTerm, setSearchTerm, searchMovies, sortMovies } =
    useGetMovies();

  return (
    <div className="searchMoviesWrapper">
      <SearchInput
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchMovies={searchMovies}
      />
      <button onClick={sortMovies}>Sort</button>

      {movies?.length ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} {...movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};
