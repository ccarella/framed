import { Link } from 'react-router-dom';
import { scoutGameEssay } from '../content/essays/scout-game';
import { higherCodedNetworksEssay } from '../content/essays/higher-coded-networks';
import { nouns839Essay } from '../content/essays/nouns-839-cc0';
import { continuousFundingEssay } from '../content/essays/continuous-funding';
import Navigation from '../components/Navigation';
import './Essays.css';

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
    <div className="page-container">
      <Navigation />
      <main>
        <div className="page-header">
          <span className="section-label">Essays</span>
        </div>
        <section className="essays-section">
          <ul className="essays-list">
            {recentEssays.map(essay => (
              <li key={essay.id} className="essay-item">
                <Link to={`/essays/${essay.id}`}>
                  <span className="essay-title">{essay.title}</span>
                  <time>{essay.date}</time>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Essays; 