import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { addMovie } from '../../store/MovieStore';
import './description.css';
import MovieType from '../../types/MovieType';

export default function Description() {
  const [loading, setLoading] = useState(true);
  const movie = useSelector((state: RootState) => state.movieProvider);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    async function loading() {
      const response = await api.get(
        `?t=${id}&apikey=${process.env.REACT_APP_API_KEY}`,
      );
      dispatch(addMovie([response.data]));
      setLoading(false);
    }

    loading();
  }, [id, loading, setLoading]);

  const saveMovie = useCallback(() => {
    const list = localStorage.getItem('movies')
      ? (JSON.parse(localStorage.getItem('movies') as string) as MovieType[])
      : [];
    const favoriteList = list || [];

    if (favoriteList.some((e) => e.Title === movie.movieList[0].Title)) {
      toast.error('Movie already saved');
      return;
    }
    favoriteList.push(movie.movieList[0]);
    localStorage.setItem('movies', JSON.stringify(favoriteList));
    toast.success('Movie saved successfully');
  }, [movie]);

  if (loading) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      {movie.movieList.map((item) => {
        return (
          <div key={item.Title} className="elementSynopsis">
            <h1>{item.Title}</h1>
            <img
              src={item.Poster !== 'N/A' ? item.Poster : 'assets/not-found.png'}
              alt={item.Title}
            />
            <h2>Plot</h2>
            <p>{item.Plot}</p>
            <ul className="group" key={item.Title}>
              <li>
                <span>Actors: </span>
                {item.Actors}
              </li>
              <li>
                <span>Year: </span>
                {item.Year ? item.Year : 'Not informed'}
              </li>
              <li>
                <span>Runtime: </span>
                {item.Runtime ? item.Runtime : 'Not informed'}
              </li>
              <li>
                <span>Genre: </span>
                {item.Genre ? item.Genre : 'Not informed'}
              </li>
            </ul>
            <div className="buttons buttonPattern">
              <button onClick={saveMovie} className="buttonSaveOrDetail">
                Save
              </button>
              <a
                href={`https://www.youtube.com/results?search_query=${item.Title}+trailer`}
                target="blank"
                className="buttonDeleteOrTrailer"
              >
                Trailer
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
