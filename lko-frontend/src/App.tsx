/**
 * Toplevel component that sets up routing.
 */
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import NavBar from './components/NavBar';

const App: React.FC = () => (
  <>
    <NavBar />
    <RouterProvider router={router} />
  </>
);

export default App;
