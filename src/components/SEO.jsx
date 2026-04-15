import React, { useEffect } from 'react';

const SEO = ({ title, description, url, type = 'website' }) => {
  useEffect(() => {
    // Standard Tags
    document.title = title ? `${title} | Onahiri` : 'Onahiri Solutions';
    
    // Find or create tags
    const setMetaTag = (property, value, isName = false) => {
      const attr = isName ? 'name' : 'property';
      let tag = document.querySelector(`meta[${attr}="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', value);
    };

    if (description) {
      setMetaTag('description', description, true);
      setMetaTag('og:description', description);
      setMetaTag('twitter:description', description, true);
    }
    
    if (title) {
      setMetaTag('og:title', `${title} | Onahiri`);
      setMetaTag('twitter:title', `${title} | Onahiri`, true);
    }
    
    if (url) {
      setMetaTag('og:url', `https://onahiri.com${url}`);
    }

    setMetaTag('og:type', type);
    
    // Keep base domain static for twitter
    setMetaTag('twitter:card', 'summary_large_image', true);
    setMetaTag('twitter:domain', 'onahiri.com', true);

  }, [title, description, url, type]);

  return null;
};

export default SEO;
