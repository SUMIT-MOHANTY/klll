/* NavBar interaction tests */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../NavBar'; // TODO: Verify import path for NavBar component

describe('NavBar component', () => {
  test('opens responsive menu when hamburger button is clicked', async () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    // Attempt to locate the hamburger button (commonly labeled with "menu")
    const button = screen.getByRole('button', { name: /menu/i });
    await userEvent.click(button);

    // Verify that the navigation region is present
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();

    // Check ARIA expanded state if applicable
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  test('navigation links route to correct paths', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <NavBar />
      </MemoryRouter>
    );

    // Example link to home page
    const homeLink = screen.getByRole('link', { name: /home/i });
    await userEvent.click(homeLink);
    expect(window.location.pathname).toBe('/');

    // Example link to about page (adjust text/paths as needed)
    const aboutLink = screen.queryByRole('link', { name: /about/i });
    if (aboutLink) {
      await userEvent.click(aboutLink);
      expect(window.location.pathname).toBe('/about');
    }
  });
});
