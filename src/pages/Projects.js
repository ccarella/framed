import { Link } from 'react-router-dom';

function Projects() {
  return (
    <main>
      <section id="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <Link to="/projects/1" className="project-card">
            <h3>Project 1</h3>
            <p>Description of your first project</p>
          </Link>
          <Link to="/projects/2" className="project-card">
            <h3>Project 2</h3>
            <p>Description of your second project</p>
          </Link>
          <Link to="/projects/3" className="project-card">
            <h3>Project 3</h3>
            <p>Description of your third project</p>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Projects; 