import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBarResponsive: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
      <button onClick={() => setOpen(!open)} style={{ marginBottom: '0.5rem' }}>
        Menu
      </button>
      {open && (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
              Home
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBarResponsive;
