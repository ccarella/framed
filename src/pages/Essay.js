import { useNavigate, useParams, Link } from 'react-router-dom';
import { scoutGameEssay } from '../content/essays/scout-game';
import { higherCodedNetworksEssay } from '../content/essays/higher-coded-networks';
import { nouns839Essay } from '../content/essays/nouns-839-cc0';
import { continuousFundingEssay } from '../content/essays/continuous-funding';
import Navigation from '../components/Navigation';
import './Essay.css';

function Essay() {
  const { id } = useParams();
  const navigate = useNavigate();

  const essays = {
    'scout-game': scoutGameEssay,
    'higher-coded-networks': higherCodedNetworksEssay,
    'nouns-839-cc0': nouns839Essay,
    'continuous-funding': continuousFundingEssay
  };

  const essay = essays[id];

  if (!essay) {
    return (
      <div className="page-container">
        <Navigation />
        <main>
          <section className="essay-detail">
            <Link to="/essays" className="back-button">← Back to Essays</Link>
            <p>Essay not found</p>
          </section>
        </main>
      </div>
    );
  }

  // Split content into paragraphs
  const paragraphs = essay.content.trim().split('\n\n').map(p => p.trim());

  return (
    <div className="page-container">
      <Navigation />
      <main>
        <section className="essay-detail">
          <Link to="/essays" className="back-button">← Back to Essays</Link>
          <article>
            <h1>{essay.title}</h1>
            <div className="essay-metadata">
              <time>{essay.date}</time>
            </div>
            <div className="essay-content">
              {paragraphs.map((paragraph, index) => {
                // Check if the paragraph is a heading (starts with ##)
                if (paragraph.startsWith('##')) {
                  return <h2 key={index}>{paragraph.replace('##', '').trim()}</h2>;
                }
                // Check if the paragraph is a list
                if (paragraph.includes('\n-')) {
                  const [listTitle, ...items] = paragraph.split('\n-');
                  return (
                    <div key={index}>
                      {listTitle && <p>{listTitle.trim()}</p>}
                      <ul>
                        {items.map((item, i) => (
                          <li key={i}>{item.trim()}</li>
                        ))}
                      </ul>
                    </div>
                  );
                }
                // Regular paragraph
                return <p key={index}>{paragraph}</p>;
              })}
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default Essay; 