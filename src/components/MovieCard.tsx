import React from 'react';
import { IMovieCard } from '../types/movie.type';


export const MovieCard = (movie:IMovieCard) => {
  return (
    <div className="movie" key={movie.movie.imdbID}>
      <div>
        <p>{movie.movie.Year}</p>
      </div>

      <div>
        <img
          src={movie.movie.Poster !== 'N/A' ? movie.movie.Poster : 'https://via.placeholder.com/400'}
          alt={movie.movie.Title}
        />
      </div>

      <div>
        <span>{movie.movie.Type}</span>
        <h3>{movie.movie.Title}</h3>
      </div>
    </div>
  );
};

