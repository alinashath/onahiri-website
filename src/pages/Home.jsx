import React from 'react';
import SEO from '../components/SEO';
import './Home.css';

const Home = () => {
  const featureCards = [
    {
      title: 'Stay Organised with OWork',
      subtitle: 'SOP based work management',
      icon: 'grid_view',
      themeClass: 'home-feature-card-primary',
      items: ['Visual task boards', 'Follow SOP steps', 'Track Progress', 'Generate Reports'],
    },
    {
      title: 'Stay Connected with OTalk',
      subtitle: 'Link conversations to goals',
      icon: 'forum',
      themeClass: 'home-feature-card-tertiary',
      items: ['Instant Messaging', 'Rich message formats', 'Conversations linked to tasks'],
    },
    {
      title: 'Stay in Sync with OPulse',
      subtitle: 'Internal communication simplified',
      icon: 'sync_alt',
      themeClass: 'home-feature-card-secondary',
      items: ['Newsfeed for work', 'Live updates and discussions', 'Reduce time spent on internal comms'],
    },
  ];

  return (
    <div className="home-page">
      <SEO
        title="Onahiri - Home Client Showcase"
        description="A unified system for work management, communication, and collaboration."
        url="/"
      />

      <main className="home-showcase">
        <section className="home-hero-section">
          <div className="home-hero-glow" />
          <div className="container home-hero-grid">
            <div className="home-hero-content">
              <div className="home-hero-badge">
                <span className="home-pulse-dot" />
                <span>the new favourite</span>
              </div>
              <h1 className="home-brand-title">Onahiri</h1>
              <div className="home-hero-lines">
                <h2>Stay Organised.</h2>
                <h2 className="home-hero-line-accent">Stay Connected.</h2>
                <h2>Stay In Sync.</h2>
              </div>
              <p className="home-hero-subtitle">
                A unified system for work management, communication and collaboration.
              </p>
              <div className="home-hero-actions">
                <button className="btn btn-primary home-btn-primary">Start for free</button>
                <button className="btn home-btn-secondary">Demo</button>
              </div>
            </div>

            <div className="home-hero-visual-wrap">
              <div className="home-hero-image-panel">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBACn6RRcSzSIY9twGMXQ0MrRGcvLHQMGY1MGJg0gQnJE6Z-xim3iPFuh94PdI0VrmB842egmZqRVdR6wQN9-kSQoFOhn-y2Cod4nNyYl9deRcT-z652YJsi30OcMpaqVVcwz5PgfCorysT94_3XiEFqye0jPZsGqkPMFGDAoWH616EbryAs9dRyQuhu6sInY1kmMmkhTVFn8JZpxKRoBnCidJ9eQ09LN_h5zT1fDvpQBndR2eg9Thwn5gTqKAGxTwIerSv9AuRjBU"
                  alt="Modern 3D abstract digital sculpture"
                  className="home-hero-image"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="home-feature-section">
          <div className="container">
            <div className="home-feature-grid">
              {featureCards.map((card) => (
                <article key={card.title} className={`home-feature-card ${card.themeClass}`}>
                  <div className="home-feature-icon-wrap">
                    <span className="material-symbols-outlined">{card.icon}</span>
                  </div>
                  <h3>{card.title}</h3>
                  <p className="home-feature-subtitle">{card.subtitle}</p>
                  <ul>
                    {card.items.map((item) => (
                      <li key={item}>
                        <span className="material-symbols-outlined">check_circle</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="home-feature-actions">
                    <button className="home-card-btn-primary">Watch Demo</button>
                    <button className="home-card-btn-secondary">
                      <span className="material-symbols-outlined">play_circle</span>
                      Get the Guide
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-trusted-section">
          <div className="container">
            <p className="home-trusted-title">teams Powered by Onahiri</p>
            <div className="home-trusted-grid">
              {['NTRIO', 'ESCAPISM', 'ISOLA ALIFU', 'AYIRA.'].map((brand) => (
                <div key={brand} className="home-trusted-item">
                  <span>{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="home-platform-section">
          <div className="container">
            <div className="home-platform-head">
              <div>
                <span>Designed for efficiency</span>
                <h2>One Platform, Three powerful applications.</h2>
                <p>Work management, chat and newsfeed in one place</p>
              </div>
              <button className="home-platform-link">
                Explore <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>

            <div className="home-platform-grid">
              <article className="home-platform-main">
                <span className="material-symbols-outlined home-platform-main-icon">security</span>
                <div className="home-platform-tag">THE COMPLETE OSUITE</div>
                <h4>Onahiri</h4>
                <p>
                  Onahari OSUITE consists of three powerful applications. Owork, Otalk and Opulse
                  that allows you to manage work and communicate seamlessly anytime anywhere.
                </p>
              </article>

              <article className="home-platform-wide">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHVC8BWUTzfF-QYpktKDli4Dlvsiln3ysQMAga5zhPmohub_vBxg-1J_f7lmtuFsTdXOPkZdBbfaPPMBuWs2e_7QRVC3hqjMLaXkpbTNxztQk29kdrLXptB3Ieov-qeTuCSGe1rO32d8ufSmws6PGr_nynp2db31-DWZlsNhmugf_CnQInLX4j3X1SAmfV0BSRFh7EaWvpMPUkyD46KYl48sSJ3WFa1T18d4kvUvy-Uoh_NOFJPUwwFa9SwrVIuZ0hXj98cPev4as"
                  alt="Abstract macro shot of glowing fiber optic cables"
                />
                <div>
                  <h4>Owork</h4>
                  <p>Stay organised with Owork</p>
                </div>
              </article>

              <article className="home-platform-small home-platform-small-tertiary">
                <span className="material-symbols-outlined">monitoring</span>
                <h4>Otalk</h4>
                <p>Stay connected with Otalk</p>
              </article>

              <article className="home-platform-small home-platform-small-secondary">
                <span className="material-symbols-outlined">api</span>
                <h4>Opulse</h4>
                <p>Stay in sync with Opulse</p>
              </article>
            </div>
          </div>
        </section>

        <section className="home-cta-section">
          <div className="home-atmospheric-glow" />
          <div className="container home-cta-content">
            <h2>Ready to elevate?</h2>
            <p>Join thousands of teams already scaling on the Onahiri stratosphere.</p>
            <div className="home-cta-actions">
              <button className="btn btn-primary home-btn-primary">Get Started for Free</button>
              <button className="btn home-btn-secondary">Contact Sales</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
