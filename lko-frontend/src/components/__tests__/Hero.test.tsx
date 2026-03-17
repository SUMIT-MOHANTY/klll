import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

test('renders hero heading', () => {
  render(<Hero />);
  expect(screen.getByRole('heading')).toHaveTextContent('Welcome to LKO Frontend');
});
