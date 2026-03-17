import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<HomePage />} />
    </Switch>
  );
}
