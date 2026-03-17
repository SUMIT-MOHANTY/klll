import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Routes from '../routes';

test('renders HomePage at root path', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes />
    </MemoryRouter>
  );
  expect(screen.getByRole('heading')).toHaveTextContent('Welcome to LKO Frontend');
});
