// src/components/Navbar.tsx

import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="nav-center">
        <span className="logo">MixCraft</span>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/cocktails">Cocktails</Link>
          <Link to="/searchForm">Search</Link> {/* Note: Corrected "SearchForm" to "search" if that's the route */}
          <Link to="/contactPage">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
