import { useNavigate, useParams } from 'react-router-dom';

function Essay() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <main>
      <section className="essay-detail">
        <button className="back-button" onClick={() => navigate('/essays')}>← Back to Essays</button>
        <article>
          <h1>Essay {id}</h1>
          <div className="essay-metadata">
            <time>December 15, 2024</time>
          </div>
          <div className="essay-content">
            <p>This is the content of essay {id}. Replace this with your actual essay content.</p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Essay; 