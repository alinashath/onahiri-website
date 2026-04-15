import React from 'react';
import './HeroSection.css';

const HeroSection = ({ 
  titleHtml, 
  subtitle, 
  primaryBtnText = "Start For Free", 
  primaryBtnLink = "https://onahiri.app/onboarding",
  secondaryBtnText,
  secondaryBtnLink,
  centered = true 
}) => {
  return (
    <div className={`hero-wrapper ${centered ? 'text-center' : ''}`}>
      {/* Background glow effects */}
      <div className="hero-glow glow-1"></div>
      <div className="hero-glow glow-2"></div>
      
      <div className="container hero-container relative z-10">
        <h1 className="hero-title animate-fade-in" dangerouslySetInnerHTML={{ __html: titleHtml }} />
        <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {subtitle}
        </p>
        
        <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <a href={primaryBtnLink} className="btn btn-primary btn-lg">
            {primaryBtnText}
          </a>
          {secondaryBtnText && (
            <a href={secondaryBtnLink} className="btn btn-secondary btn-lg">
              {secondaryBtnText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
