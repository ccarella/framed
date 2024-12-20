import { useNavigate, useParams } from 'react-router-dom';

function ArtworkDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <main>
      <section className="artwork-detail">
        <button className="back-button" onClick={() => navigate('/artwork')}>← Back to Artwork</button>
        <article>
          <div className="artwork-image-full">
            {/* Artwork image will go here */}
          </div>
          <div className="artwork-info">
            <h1>{id}</h1>
            <div className="artwork-metadata">
              <time>December 2024</time>
            </div>
            <div className="artwork-content">
              <p>Description of the artwork. Replace this with your actual artwork content.</p>
            </div>
            <a href="https://hypersub.xyz/s/studio-2-by-ccarella-zjkxt6sxj8qo/1/drops" 
               className="artwork-link" 
               target="_blank" 
               rel="noopener noreferrer">
              View on Hypersub →
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}

export default ArtworkDetail; 