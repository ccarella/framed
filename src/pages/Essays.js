import { Link } from 'react-router-dom';

function Essays() {
  return (
    <main>
      <section id="essays">
        <h2>Essays</h2>
        <div className="project-grid">
          <Link to="/essays/1" className="project-card">
            <h3>Essay 1</h3>
            <p>Brief description of the essay</p>
          </Link>
          <Link to="/essays/2" className="project-card">
            <h3>Essay 2</h3>
            <p>Brief description of the essay</p>
          </Link>
          <Link to="/essays/3" className="project-card">
            <h3>Essay 3</h3>
            <p>Brief description of the essay</p>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Essays; 