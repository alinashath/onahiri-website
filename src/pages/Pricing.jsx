import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing-page">
      <main className="pricing-main">
        <section className="pricing-hero">
          <div className="pricing-orb pricing-orb-primary" />
          <div className="pricing-orb pricing-orb-tertiary" />
          <div className="container pricing-hero-inner">
            <div className="pricing-pill">
              <span className="pricing-pill-dot" />
              <span>FREE FOR 30 DAYS</span>
            </div>
            <h1>GET ALL FOR A SINGLE PRICE</h1>
            <p>
              One price. Every feature. Unlimited potential. Start your 30-day free trial today and
              experience the new approach to manage work.
            </p>
          </div>
        </section>

        <section className="pricing-card-section">
          <div className="container pricing-card-container">
            <div className="pricing-card-border-glow" />
            <article className="pricing-card">
              <h2>Get full OSuite</h2>
              <div className="pricing-price-row">
                <span className="pricing-price">$4</span>
                <span className="pricing-period">/user/mo</span>
              </div>
              <p className="pricing-description">
                No hidden fees. No complicated fee tiers. You are billed solely based on the number of
                active users in your last 30-day payment cycle.
              </p>
              <button className="pricing-primary-btn">START YOUR FREE TRIAL</button>
              <p className="pricing-subtext">Cancel anytime. No credit card required to start.</p>
            </article>
          </div>
        </section>

        <section className="pricing-clients">
          <div className="container pricing-clients-inner">
            <p className="pricing-clients-label">OUR CLIENTS</p>
            <div className="pricing-client-grid">
              <div className="pricing-client-item">
                <span className="material-symbols-outlined">deployed_code</span>
                <span>NTRIO</span>
              </div>
              <div className="pricing-client-item">
                <span className="material-symbols-outlined">blur_on</span>
                <span>ESCAPISM</span>
              </div>
              <div className="pricing-client-item">
                <span className="material-symbols-outlined">rocket_launch</span>
                <span>ISOLA ALIFU</span>
              </div>
              <div className="pricing-client-item">
                <span className="material-symbols-outlined">dynamic_feed</span>
                <span>AYIRA</span>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing-final-cta">
          <div className="pricing-final-bg" />
          <div className="container pricing-final-inner">
            <h2>Ready to unify your workflow?</h2>
            <p>Join 50,000+ teams today and experience the new standard of productivity.</p>
            <div className="pricing-final-actions">
              <button className="pricing-primary-btn">Start Your 30-Day Free Trial</button>
              <button className="pricing-secondary-btn">Contact Sales</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pricing;
