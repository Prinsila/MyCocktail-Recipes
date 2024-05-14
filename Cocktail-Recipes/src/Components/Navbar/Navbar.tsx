

import { Link } from 'react-router-dom';
import './Navbar.css';
import ToggleIcon from '../ThemeContext/ToggleIcon';

function Navbar() {
  return (
    <nav>
      <div className="nav-center">
        <span className="logo">MixCraft</span>
        <ToggleIcon />
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/cocktails">Cocktails</Link>
          <Link to="/searchForm">Search</Link> 
          <Link to="/contactPage">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
