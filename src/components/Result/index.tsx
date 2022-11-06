import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import './result.css';

export default function Result() {
  const movie = useSelector((state: RootState) => state.movieProvider);

  return (
    <div className="result containerInMain">
      {movie.movieList.map((item) => (
        <div key={item.Title} className="movie">
          <h1>{item.Title}</h1>
          <img
            src={item.Poster !== 'N/A' ? item.Poster : 'assets/not-found.png'}
            alt={item.Title}
            className="imgBack"
          />
          <Link to={`/description/${item.Title}`} className="btn">
            See details
          </Link>
        </div>
      ))}
    </div>
  );
}
