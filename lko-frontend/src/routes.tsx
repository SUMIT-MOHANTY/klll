/**
 * Central route definitions for the application.
 */
import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import HomePage from './pages/HomePage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
];

export const router = createBrowserRouter(routes);

const AppRoutes: React.FC = () => (
  <React.Fragment>
    {/* Router is provided at the app level */}
    {routes.map(route => (
      <React.Fragment key={route.path as string}>{route.element}</React.Fragment>
    ))}
  </React.Fragment>
);

export default AppRoutes;
