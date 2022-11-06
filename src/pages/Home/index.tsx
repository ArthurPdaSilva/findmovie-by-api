import React from 'react';
import Result from '../../components/Result';
import Search from '../../components/Search';
import './home.css';

export default function Home() {
  return (
    <main className="container">
      <Search />
      <Result />
    </main>
  );
}
