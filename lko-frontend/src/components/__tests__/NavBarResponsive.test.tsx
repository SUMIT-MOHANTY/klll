import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBarResponsive from '../NavBarResponsive';

describe('NavBarResponsive (mobile hamburger)', () => {
  test('renders button and toggles menu with correct ARIA attributes', () => {
    render(
      <BrowserRouter>
        <NavBarResponsive />
      </BrowserRouter>
    );

    const button = screen.getByRole('button', { name: /toggle navigation/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-expanded', 'false');

    // First click - open menu
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    const nav = screen.getByRole('navigation');
    expect(nav).toBeVisible();

    // Second click - close menu
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(nav).not.toBeVisible();
  });
});
