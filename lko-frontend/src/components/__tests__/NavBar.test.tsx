import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../NavBar';
import { BrowserRouter } from 'react-router-dom';

test('renders NavBar with Home link', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  expect(screen.getByText(/home/i)).toBeInTheDocument();
});
