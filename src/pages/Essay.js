import { useNavigate, useParams } from 'react-router-dom';
import { scoutGameEssay } from '../content/essays/scout-game';
import { higherCodedNetworksEssay } from '../content/essays/higher-coded-networks';
import { nouns839Essay } from '../content/essays/nouns-839-cc0';
import { continuousFundingEssay } from '../content/essays/continuous-funding';
import ReactMarkdown from 'react-markdown';

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
    return <div>Essay not found</div>;
  }

  return (
    <main>
      <section className="essay-detail">
        <button className="back-button" onClick={() => navigate('/essays')}>← Back to Essays</button>
        <article>
          <h1>{essay.title}</h1>
          {essay.subtitle && <h2 className="subtitle">{essay.subtitle}</h2>}
          <div className="essay-metadata">
            <time>{essay.date}</time>
            <span>By {essay.author}</span>
            <span>{essay.collectors} collectors</span>
            <span>Arweave TX: {essay.arweaveTx}</span>
          </div>
          <div className="essay-content">
            <ReactMarkdown>{essay.content}</ReactMarkdown>
          </div>
          {essay.comments && essay.comments.length > 0 && (
            <div className="essay-comments">
              <h3>Comments</h3>
              {essay.comments.map((comment, index) => (
                <div key={index} className="comment">
                  <div className="comment-metadata">
                    <span className="comment-author">{comment.author}</span>
                    <time>{comment.date}</time>
                    {comment.platform && (
                      <span className="comment-platform">via {comment.platform}</span>
                    )}
                  </div>
                  <p>{comment.content}</p>
                  {comment.reactions && (
                    <div className="comment-reactions">
                      {comment.reactions.likes > 0 && (
                        <span className="reaction">❤️ {comment.reactions.likes}</span>
                      )}
                      {comment.reactions.recasts > 0 && (
                        <span className="reaction">🔄 {comment.reactions.recasts}</span>
                      )}
                      {comment.reactions.replies > 0 && (
                        <span className="reaction">💬 {comment.reactions.replies}</span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </article>
      </section>
    </main>
  );
}

export default Essay; 