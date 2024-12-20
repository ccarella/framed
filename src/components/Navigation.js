import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/#about">About</a></li>
          <li><Link to="/essays">Essays</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/artwork">Artwork</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation; 