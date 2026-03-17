import React from 'react';
import HomePage from './pages/HomePage';

export interface RouteConfig {
  path: string;
  element: JSX.Element;
}

const routes: RouteConfig[] = [
  { path: '/', element: <HomePage /> },
];

export default routes;
