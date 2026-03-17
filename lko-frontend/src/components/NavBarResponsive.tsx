import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Mobile navigation bar with hamburger toggle.
 * Accessible: aria-label, aria-expanded, role="navigation".
 */
const NavBarResponsive: React.FC = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(prev => !prev);

  // Close menu when a link is clicked (helps with singlepage navigation)
  const handleLinkClick = () => setOpen(false);

  return (
    <div className="nav-responsive">
      <button
        className="hamburger"
        type="button"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>

      <div
        className={open ? 'mobile-menu nav-open' : 'mobile-menu nav-closed'}
        role="navigation"
        aria-hidden={!open}
      >
        <ul>
          <li>
            <Link to="/" onClick={handleLinkClick}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={handleLinkClick}>About</Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBarResponsive;
