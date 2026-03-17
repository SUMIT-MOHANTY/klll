import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage';

describe('Routing', () => {
  test('renders HomePage at root path "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    // Verify HomePage content appears - adjust selector to match a unique element in HomePage
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });

  test('shows fallback for unknown path', () => {
    render(
      <MemoryRouter initialEntries={['/unknown-path']}>
        <App />
      </MemoryRouter>
    );
    // Assuming fallback renders a "Not Found" message
    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });
});
