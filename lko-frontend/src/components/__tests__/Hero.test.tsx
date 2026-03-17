import { render, screen } from '@testing-library/react';
import Hero from '../../Hero';

test('renders hero title', () => {
  render(<Hero />);
  expect(screen.getByText(/welcome to lko frontend/i)).toBeInTheDocument();
});
