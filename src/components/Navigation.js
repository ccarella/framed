import { NavLink, Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>About</NavLink></li>
          <li><NavLink to="/essays" className={({ isActive }) => isActive ? 'active' : ''}>Essays</NavLink></li>
          <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink></li>
          <li><NavLink to="/artwork" className={({ isActive }) => isActive ? 'active' : ''}>Artwork</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation; 