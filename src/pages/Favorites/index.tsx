import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import MovieType from '../../types/MovieType';
import './favorites.css';

export default function Favorites() {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    const myList = localStorage.getItem('movies')
      ? (JSON.parse(localStorage.getItem('movies') as string) as MovieType[])
      : [];
    setMovies(myList);
  }, [setMovies]);

  const deleteItem = useCallback(
    (Title: string) => {
      const filterMovie = movies.filter((item) => {
        return item.Title !== Title;
      });

      localStorage.setItem('movies', JSON.stringify(filterMovie));
      setMovies(filterMovie);
      toast.success('Movie Deleted Successfully');
    },
    [movies, setMovies],
  );

  return (
    <div className="favoritesContainer">
      <h1>My Movies</h1>
      {movies.length === 0 && <h2>You do not have saved movie.</h2>}
      <ul>
        {movies.map((item) => (
          <li key={item.imdbID}>
            <span>{item.Title}</span>
            <div className="buttonPattern btnGroup">
              <Link
                to={`/description/${item.Title}`}
                className="buttonSaveOrDetail"
              >
                Details
              </Link>
              <button
                onClick={() => deleteItem(item.Title)}
                className="buttonDeleteOrTrailer"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
        ;
      </ul>
    </div>
  );
}
