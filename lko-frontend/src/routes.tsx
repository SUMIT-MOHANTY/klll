import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

const RoutesComponent: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
);

export default RoutesComponent;
