import React, { FC } from 'react';
import { IMovie } from '../services/movie/movie.types';

export const MovieCard: FC<IMovie> = ({ Poster, Title, Type, Year }) => {
  return (
    <div className="movie">
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img
          src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'}
          alt={Title}
        />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
};
