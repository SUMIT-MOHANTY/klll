import React from 'react';
import { Link } from 'react-router-dom';
import NavBarResponsive from './NavBarResponsive';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      {/* Desktop navigation - hidden on small screens via CSS */}
      <div className="nav-desktop">
        <Link to="/" className="logo">MyApp</Link>
        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile / responsive navigation */}
      <NavBarResponsive />
    </nav>
  );
};

export default NavBar;
