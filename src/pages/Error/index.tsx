import React from 'react';
import { useNavigate } from 'react-router';
import './error.css';

export default function Error() {
  const history = useNavigate();
  setTimeout(() => {
    history('/');
  }, 5000);

  return (
    <div className="container">
      <div className="errorContainer">
        <h1>[ERROR 404]</h1>
        <p>Page not found!</p>
        <p>Redirecting to Home page...</p>
      </div>
    </div>
  );
}
