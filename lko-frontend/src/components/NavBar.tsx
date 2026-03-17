import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => (
  <nav style={{ padding: '1rem', background: '#222', color: '#fff' }}>
    <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
      Home
    </Link>
  </nav>
);

export default NavBar;
