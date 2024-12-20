import { useNavigate, useParams } from 'react-router-dom';

function Project() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <main>
      <section className="project-detail">
        <button className="back-button" onClick={() => navigate('/projects')}>← Back to Projects</button>
        <article>
          <h1>Project {id}</h1>
          <div className="project-metadata">
            <time>2024</time>
          </div>
          <div className="project-content">
            <p>This is the content of project {id}. Replace this with your actual project content.</p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Project; 