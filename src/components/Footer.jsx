import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand-logo">
              <img src="/logo.svg" alt="Onahiri" className="brand-logo-img" />
            </Link>
            <p className="footer-desc">
              Where you can manage work efficiently, collaborate seamlessly, and stay connected.
            </p>
            <a href="mailto:make.easy@effimetic.com" className="footer-email">
              make.easy@effimetic.com
            </a>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-title">Solutions</h4>
            <ul>
              <li><Link to="/owork">OWork</Link></li>
              <li><Link to="/otalk">OTalk</Link></li>
              <li><Link to="/opulse">OPulse</Link></li>
              <li><Link to="/people-places">People & Places</Link></li>
              <li><Link to="/templates">Templates</Link></li>
              <li><Link to="/reports">Reports</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-title">Company</h4>
            <ul>
              <li><Link to="/">About Us</Link></li>
              <li><Link to="/">Contact</Link></li>
              <li><a href="https://onahiri.app">Login</a></li>
              <li><a href="https://onahiri.app/onboarding">Sign Up</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Onahiri (Clone). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
