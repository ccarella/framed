import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 'charmverse',
      title: 'CharmVerse',
      description: 'A decentralized platform for discovering and supporting open source developers.',
      date: 'September 16, 2024',
    },
    {
      id: 'hypersub',
      title: 'Hypersub',
      description: 'NFT subscription platform for creators and collectors.',
      date: 'August 1, 2024',
    },
    {
      id: 'framed',
      title: 'Framed',
      description: 'Personal website and blog framework built with React.',
      date: 'July 15, 2024',
    }
  ];

  return (
    <div className="page-container">
      <Navigation />
      <main>
        <div className="page-header">
          <span className="section-label">Projects</span>
        </div>
        <section className="projects-section">
          <ul className="projects-list">
            {projects.map(project => (
              <li key={project.id} className="project-item">
                <Link to={`/projects/${project.id}`}>
                  <div className="project-info">
                    <span className="project-title">{project.title}</span>
                    <span className="project-description">{project.description}</span>
                  </div>
                  <time>{project.date}</time>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Projects; 