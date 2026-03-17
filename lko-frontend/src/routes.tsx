/**
 * Central route definitions for the application.
 */
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import HomePage from './pages/HomePage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
];

export const router = createBrowserRouter(routes);
