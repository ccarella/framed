import { Link } from 'react-router-dom';
import { scoutGameEssay } from '../content/essays/scout-game';
import { higherCodedNetworksEssay } from '../content/essays/higher-coded-networks';
import { nouns839Essay } from '../content/essays/nouns-839-cc0';
import { continuousFundingEssay } from '../content/essays/continuous-funding';

function Essays() {
  const allEssays = [
    { id: 'higher-coded-networks', ...higherCodedNetworksEssay },
    { id: 'scout-game', ...scoutGameEssay },
    { id: 'nouns-839-cc0', ...nouns839Essay },
    { id: 'continuous-funding', ...continuousFundingEssay }
  ].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Only show the three most recent essays
  const recentEssays = allEssays.slice(0, 3);

  return (
    <main>
      <section id="essays">
        <h2>Essays</h2>
        <div className="project-grid">
          {recentEssays.map(essay => (
            <Link key={essay.id} to={`/essays/${essay.id}`} className="project-card">
              <h3>{essay.title}</h3>
              {essay.subtitle && <p className="subtitle">{essay.subtitle}</p>}
              <div className="essay-metadata">
                <time>{essay.date}</time>
                <span>{essay.collectors} collectors</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Essays; 