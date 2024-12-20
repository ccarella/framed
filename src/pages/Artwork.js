import { Link } from 'react-router-dom';

function Artwork() {
  return (
    <main>
      <section id="artwork">
        <h2>Artwork</h2>
        <div className="artwork-grid">
          <Link to="/artwork/texture" className="artwork-card">
            <div className="artwork-image">
              <span className="artwork-date">Dec 12, 2024</span>
            </div>
            <h3>.texture</h3>
          </Link>
          <Link to="/artwork/light" className="artwork-card">
            <div className="artwork-image">
              <span className="artwork-date">Dec 08, 2024</span>
            </div>
            <h3>.light</h3>
          </Link>
          <Link to="/artwork/art" className="artwork-card">
            <div className="artwork-image">
              <span className="artwork-date">Dec 05, 2024</span>
            </div>
            <h3>.art</h3>
          </Link>
          <Link to="/artwork/moon" className="artwork-card">
            <div className="artwork-image">
              <span className="artwork-date">Nov 12, 2024</span>
            </div>
            <h3>Moon</h3>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Artwork; 