import React from 'react';
import { ArrowRight } from 'lucide-react';
import './FeatureBlock.css';

const FeatureBlock = ({ 
  title, 
  description, 
  features = [], 
  linkUrl, 
  linkText = "Discover",
  reverse = false,
  visualContent
}) => {
  return (
    <section className="feature-block">
      <div className={`container feature-container ${reverse ? 'reverse' : ''}`}>
        <div className="feature-content">
          <h2 className="feature-title">{title}</h2>
          <p className="feature-desc">{description}</p>
          
          {features.length > 0 && (
            <ul className="feature-list">
              {features.map((item, idx) => (
                <li key={idx} className="feature-list-item">
                  <span className="feature-indicator"></span>
                  {item}
                </li>
              ))}
            </ul>
          )}
          
          {linkUrl && (
            <a href={linkUrl} className="feature-link">
              {linkText} <ArrowRight size={18} />
            </a>
          )}
        </div>
        
        <div className="feature-visual glass-panel">
          {visualContent || <div className="placeholder-visual">Visual Preview</div>}
        </div>
      </div>
    </section>
  );
};

export default FeatureBlock;
