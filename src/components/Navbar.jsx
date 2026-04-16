import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Activity, MessageSquare, PlusSquare, Network, Layers, BarChart2 } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setSolutionsOpen(false);
  }, [location.pathname]);

  const toggleSolutions = (e) => {
    e.preventDefault();
    setSolutionsOpen(!solutionsOpen);
  };

  const solutions = [
    { name: 'OWork', to: '/owork', icon: <Activity size={18} />, desc: 'Task Management' },
    { name: 'OTalk', to: '/otalk', icon: <MessageSquare size={18} />, desc: 'Smart Conversations' },
    { name: 'OPulse', to: '/opulse', icon: <PlusSquare size={18} />, desc: 'Build Culture & Ideas' },
    { name: 'People & Places', to: '/people-places', icon: <Network size={18} />, desc: 'Map Staff & Teams' },
    { name: 'Templates', to: '/templates', icon: <Layers size={18} />, desc: 'Reusable Workflows' },
    { name: 'Reports', to: '/reports', icon: <BarChart2 size={18} />, desc: 'Data-driven Decisions' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="brand-logo">
          <img src="/logo.svg" alt="Onahiri" className="brand-logo-img" />
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          <div className="dropdown" onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)}>
            <div className="nav-link dropdown-trigger" onClick={toggleSolutions}>
              Solutions <ChevronDown size={16} />
            </div>
            {solutionsOpen && (
              <div className="dropdown-menu glass-panel">
                <div className="dropdown-grid">
                  {solutions.map((item) => (
                    <Link key={item.name} to={item.to} className="dropdown-item">
                      <div className="dropdown-item-icon">{item.icon}</div>
                      <div>
                        <div className="dropdown-item-title">{item.name}</div>
                        <div className="dropdown-item-desc">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link to="/" className="nav-link">Features</Link>
          <Link to="/docs/onahiri" className="nav-link">Docs</Link>
          <Link to="/pricing" className="nav-link">Pricing</Link>
        </div>

        <div className="nav-actions desktop-only">
          <a href="#" className="btn btn-secondary">Login</a>
          <a href="#" className="btn btn-primary">Start for Free</a>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle mobile-only" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu glass-panel animate-fade-in">
          <div className="mobile-links">
            <div className="mobile-link group">
              <div className="mobile-dropdown-trigger" onClick={toggleSolutions}>
                Solutions <ChevronDown size={16} className={solutionsOpen ? 'rotate' : ''}/>
              </div>
              {solutionsOpen && (
                <div className="mobile-dropdown-menu">
                  {solutions.map(item => (
                    <Link key={item.name} to={item.to} className="mobile-dropdown-item">
                      {item.icon} {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/" className="mobile-link">Features</Link>
            <Link to="/pricing" className="mobile-link">Pricing</Link>
          </div>
          <div className="mobile-actions">
            <a href="#" className="btn btn-secondary full-width">Login</a>
            <a href="#" className="btn btn-primary full-width mt-2">Start for Free</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
