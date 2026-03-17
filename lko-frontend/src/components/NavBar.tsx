import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav style={{ padding: '1rem', background: '#282c34' }}>
      <Link to="/" style={{ color: '#61dafb', marginRight: '1rem' }}>Home</Link>
    </nav>
  );
}
