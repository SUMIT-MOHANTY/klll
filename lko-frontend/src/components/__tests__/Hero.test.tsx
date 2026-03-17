import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

test('renders Hero component', () => {
  render(<Hero />);
  expect(screen.getByText(/hero section/i)).toBeInTheDocument();
});
