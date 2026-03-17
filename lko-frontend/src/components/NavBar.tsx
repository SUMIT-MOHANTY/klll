import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => (
  <nav>
    <Link to="/">Home</Link>
    {/* Add more navigation links as needed */}
  </nav>
);

export default NavBar;
