import React, { useState, useEffect } from 'react';
import { Search, ChevronRight, BookOpen, AlertCircle, Menu, X } from 'lucide-react';
import SEO from '../components/SEO';
import './Docs.css';
import db from '../data/docsDB.json';

const Docs = () => {
  const [activeDoc, setActiveDoc] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [docs, setDocs] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filter out any unwanted junk and sort
  useEffect(() => {
    if (db && Array.isArray(db)) {
      setDocs(db.filter(d => d.title && d.content && d.id !== 'owork-owork'));
    }
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredDocs = docs.filter(doc => 
    doc.title.toLowerCase().includes(searchQuery) || 
    doc.content.toLowerCase().includes(searchQuery) ||
    doc.category.toLowerCase().includes(searchQuery)
  );

  // Group filtered by category for the sidebar
  const groupedDocs = filteredDocs.reduce((acc, doc) => {
    let cat = doc.category.charAt(0).toUpperCase() + doc.category.slice(1);
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(doc);
    return acc;
  }, {});

  const getRelatedDocs = (currentDoc) => {
    if (!currentDoc) return [];
    return docs.filter(d => d.category === currentDoc.category && d.id !== currentDoc.id).slice(0, 3);
  };

  useEffect(() => {
    // Intercept clicks on links pointing inside the documentation content block
    const container = document.querySelector('.article-content');
    if (!container) return;

    const links = container.querySelectorAll('a[data-docid]');
    
    const handleDocClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('data-docid');
      const matchedDoc = docs.find(d => d.id === targetId || d.id === targetId + '-');
      if (matchedDoc) {
        setActiveDoc(matchedDoc);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    links.forEach(l => l.addEventListener('click', handleDocClick));
    return () => {
      links.forEach(l => l.removeEventListener('click', handleDocClick));
    };
  }, [activeDoc, docs]);

  // Handle active doc changing from mobile -> close menu
  useEffect(() => {
    if (activeDoc) setMobileMenuOpen(false);
  }, [activeDoc]);

  return (
    <div className="docs-layout pt-doc">
      <SEO 
        title={activeDoc ? activeDoc.title : "Documentation Hub"} 
        description={activeDoc ? `Read documentation about ${activeDoc.title} in the ${activeDoc.category} section.` : "Explore the full Onahiri Solutions knowledge base."}
        url={activeDoc ? `/docs/onahiri/${activeDoc.id}` : "/docs/onahiri"}
        type="article"
      />
      {/* Mobile Top Bar */}
      <div className="mobile-docs-bar">
         <span className="mobile-docs-title">Documentation Menu</span>
         <button className="mobile-docs-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
         </button>
      </div>

      {/* Sidebar */}
      <aside className={`docs-sidebar ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="docs-search-container">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search documentation..." 
            value={searchQuery}
            onChange={handleSearch}
            className="docs-search-input"
          />
        </div>

        <nav className="docs-nav">
          <div className="nav-group">
            <button 
              className={`nav-link-top ${!activeDoc ? 'active' : ''}`}
              onClick={() => setActiveDoc(null)}
            >
              <BookOpen size={16} /> Home
            </button>
          </div>
          
          {Object.entries(groupedDocs).map(([cat, items]) => (
            <div key={cat} className="nav-group">
              <h4 className="nav-group-title">{cat}</h4>
              <ul className="nav-list">
                {items.map(item => (
                  <li key={item.id}>
                    <button 
                      className={`nav-link-sub ${activeDoc?.id === item.id ? 'active' : ''}`}
                      onClick={() => setActiveDoc(item)}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {Object.keys(groupedDocs).length === 0 && (
            <div className="no-results">
              <AlertCircle size={16} /> No results found.
            </div>
          )}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="docs-main">
        {!activeDoc ? (
          <div className="docs-landing animate-fade-in">
            <h1 className="docs-title gradient-text">Onahiri Documentation</h1>
            <p className="docs-subtitle mb-xl">
              Welcome to the full knowledge base. Search or select a category on the left to start learning.
            </p>
            <div className="docs-grid">
              {Object.keys(groupedDocs).slice(0, 6).map(cat => (
                <div key={cat} className="doc-card glass-panel" onClick={() => setActiveDoc(groupedDocs[cat][0])}>
                  <h2 className="doc-heading">{cat}</h2>
                  <p className="doc-desc">Explore all {cat.toLowerCase()} documentation, guides, and related references.</p>
                  <span className="feature-link mt-4">Read Now <ChevronRight size={16} /></span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="docs-article animate-fade-in">
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
              <span className="crumb-link" onClick={() => setActiveDoc(null)}>Docs</span>
              <span className="crumb-sep">/</span>
              <span className="crumb-link capitalize">{activeDoc.category}</span>
              <span className="crumb-sep">/</span>
              <span className="crumb-current">{activeDoc.title}</span>
            </div>

            <div className="article-header">
              <span className="article-category">{activeDoc.category.toUpperCase()}</span>
              <h1 className="article-title">{activeDoc.title}</h1>
            </div>
            
            <div 
              className="article-content" 
              dangerouslySetInnerHTML={{ __html: activeDoc.content }} 
            />

            <hr className="article-divider" />
            
            <div className="related-items">
              <h3 className="mb-4">Related Documentation</h3>
              <div className="related-grid">
                {getRelatedDocs(activeDoc).map(rel => (
                  <div key={rel.id} className="related-card glass-panel" onClick={() => setActiveDoc(rel)}>
                    <h4 className="related-title">{rel.title}</h4>
                    <span className="related-link">Read <ChevronRight size={14}/></span>
                  </div>
                ))}
                {getRelatedDocs(activeDoc).length === 0 && (
                  <p className="text-secondary">No related items found.</p>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Docs;
