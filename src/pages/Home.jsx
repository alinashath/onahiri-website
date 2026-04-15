import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureBlock from '../components/FeatureBlock';
import SEO from '../components/SEO';
import { Layers, Users, BarChart, ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <SEO 
        title="Work Management and Social Intranet Platform" 
        description="Onahiri Solutions provides powerful software for team collaboration, task management, corporate chatting, and people organizational structure." 
        url="/" 
      />
      <HeroSection 
        titleHtml="Work Management <br/><span class='gradient-text'>Made Easy</span> with Onahiri"
        subtitle="Where you can manage work efficiently, collaborate seamlessly and stay connected. Task Management, Chat and Newsfeed - All in One Platform."
        primaryBtnText="START FOR FREE"
        primaryBtnLink="https://onahiri.app/onboarding"
      />

      <div className="container relative z-10 text-center pb-xl" style={{ marginTop: "-2rem" }}>
        <img src="/hero-art.png" alt="Onahiri Synergy" style={{ width: '100%', maxWidth: '1000px', borderRadius: '24px', boxShadow: '0 20px 80px rgba(0,0,0,0.5)' }} />
      </div>

      {/* Core Solutions Grid */}
      <section className="container py-xl">
        <div className="solutions-grid">
          <div className="solution-card glass-panel text-center">
            <h3 className="solution-title">OWork</h3>
            <p>Task Management Made Simple.</p>
            <a href="/owork" className="feature-link mt-4 justify-center">Discover <ArrowRight size={16}/></a>
          </div>
          <div className="solution-card glass-panel text-center">
            <h3 className="solution-title">OTalk</h3>
            <p>Smart Conversations, Real Results.</p>
            <a href="/otalk" className="feature-link mt-4 justify-center">Discover <ArrowRight size={16}/></a>
          </div>
          <div className="solution-card glass-panel text-center">
            <h3 className="solution-title">OPulse</h3>
            <p>Build Culture. Share Ideas. Stay in Sync.</p>
            <a href="/opulse" className="feature-link mt-4 justify-center">Discover <ArrowRight size={16}/></a>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="advanced-features bg-secondary py-xl">
        <div className="container">
          <h2 className="text-center mb-xl">Advanced Features</h2>
          
          <div className="adv-grid">
            <div className="adv-card glass-panel">
              <div className="adv-icon"><Layers size={24}/></div>
              <h3>Templates</h3>
              <p>Use templates to design workflows</p>
              <a href="/templates" className="margin-top-auto adv-link">Read more</a>
            </div>
            <div className="adv-card glass-panel">
              <div className="adv-icon"><Users size={24}/></div>
              <h3>People & Places</h3>
              <p>Manage teams and access control</p>
              <a href="/people-places" className="margin-top-auto adv-link">Read more</a>
            </div>
            <div className="adv-card glass-panel">
              <div className="adv-icon"><BarChart size={24}/></div>
              <h3>Reports</h3>
              <p>Create dashboards and generate reports</p>
              <a href="/reports" className="margin-top-auto adv-link">Read more</a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section py-xl">
        <div className="container text-center">
          <h2 className="mb-4">Get all for a single price</h2>
          <p className="pricing-desc mx-auto mb-xl">
            No hidden fees. No complicated fee tiers. You are billed solely based on the number of active users in your last 30-day payment cycle.
          </p>

          <div className="pricing-card glass-panel mx-auto">
            <div className="pricing-badge">FREE FOR 30 DAYS</div>
            <h3 className="pricing-title">Base Price</h3>
            <div className="price-tag">
              <span className="currency">$</span>
              <span className="amount">40</span>
            </div>
            <div className="price-sub">Per User <strong>$4/mo</strong></div>
            
            <ul className="pricing-features">
              <li>OWork</li>
              <li>OTalk</li>
              <li>Pulse</li>
              <li>Manage Persons</li>
              <li>Advanced Reporting</li>
              <li>Work Templates</li>
              <li className="dimmed">Mobile Apps (Coming Soon)</li>
              <li className="dimmed">AI (Coming Soon)</li>
            </ul>

            <a href="https://onahiri.app/onboarding" className="btn btn-primary full-width mt-4">START FOR FREE</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
