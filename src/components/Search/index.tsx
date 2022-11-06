import React, { useState, useCallback } from 'react';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addMovie } from '../../store/MovieStore';
import './search.css';

export default function Search() {
  const [field, setField] = useState('');
  const dispatch = useDispatch();

  const searchMovie = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      async function searching() {
        if (field === '') {
          toast.error('Digite o nome do filme, primeiro!');
          return;
        }
        const response = await api.get(
          `?t=${field}&apikey=${process.env.REACT_APP_API_KEY}`,
        );
        console.log(response.data);
        dispatch(addMovie([response.data]));
        setField('');
      }
      searching();
    },
    [field, setField],
  );

  return (
    <div className="search containerInMain">
      <h1>Search Media</h1>
      <p>
        Enter the name of a movie, series, anime,... in english and search for
        its synopsis. Example: Iron Man, Bojack, Titanic, Naruto etc...
      </p>
      <form onSubmit={(e) => searchMovie(e)}>
        <input
          type="text"
          value={field}
          onChange={(e) => {
            setField(e.target.value);
          }}
        />
        <button className="btnSearch" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
