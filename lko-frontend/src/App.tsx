import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes />
    </BrowserRouter>
  );
}
