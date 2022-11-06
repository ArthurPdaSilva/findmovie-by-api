import React from 'react';
import { Routes as ContainerRoutes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Description from './pages/Description';
import Error from './pages/Error';

export default function Routes() {
  return (
    <ContainerRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/description/:id" element={<Description />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<Error />} />
    </ContainerRoutes>
  );
}
