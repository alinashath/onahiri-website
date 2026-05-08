import React from 'react';
import { ONBOARDING_URL } from '../constants/links';
import './OPulse.css';

const OPulse = () => {
  const workplaceCards = [
    {
      icon: 'campaign',
      title: 'Dynamic Updates',
      description:
        'Create posts, polls, and announcements to inform, celebrate, or engage the team with beautiful rich media support.',
      iconClass: 'opulse-icon-primary',
    },
    {
      icon: 'bolt',
      title: 'Live Feeds',
      description:
        'Real-time updates with comments, reactions to keep conversations relevant.',
      iconClass: 'opulse-icon-tertiary',
    },
    {
      icon: 'groups',
      title: 'Group Participation',
      description:
        'Join focused spaces to collaborate around departments, specific projects, or shared professional interests.',
      iconClass: 'opulse-icon-secondary',
    },
  ];

  return (
    <div className="opulse-page">
      <main className="opulse-main">
        <section className="opulse-hero">
          <div className="opulse-hero-glow" />
          <div className="container opulse-hero-grid">
            <div className="opulse-hero-content">
              <h1>
                Stay in Sync with <span>OPulse</span>
              </h1>
              <p>
                OPulse is your organization&apos;s social collaboration layer-connecting people, ideas, and
                updates in one unified space.
              </p>
              <div className="opulse-hero-actions">
                <a href={ONBOARDING_URL} className="btn btn-primary opulse-btn-primary">
                  Start Collaborating
                </a>
                <button type="button" className="btn opulse-btn-secondary">
                  <span className="material-symbols-outlined">play_circle</span>
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="opulse-hero-media">
              <div className="opulse-hero-card">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS2P30lX0EE2RdqH-13oghcgQcnWKrtpPNvtMiWn14KRXUhGt54ZXJUka9SlrIRDDUJ3CulUd8Z_6KvnoyKVii7vzCqPsd4kEJjm7KgAHlfG-VRY4zrDg4A_f1app_SBdKqyGQXuxrW0gUviCivx18ovL9udTE2-Jko1IAgVN39Qp6KEHAaEwKVseJr-HGMhsmUgN5iH-DMU52V-1ibvExOhA3yZxypePvj8qJlCUug6tcNLL_oWX4pd8-aEFD7Elq3xm01iEaJas"
                  alt="Digital workplace interface"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="opulse-workplace">
          <div className="container">
            <div className="opulse-workplace-head">
              <h2>
                Foster a <span>Connected</span> Workplace
              </h2>
              <p>
                OPulse strengthens team culture with a space for open sharing, engagement, and updates-
                keeping everyone aligned and inspired.
              </p>
            </div>

            <div className="opulse-workplace-grid">
              {workplaceCards.map((card) => (
                <article key={card.title} className="opulse-workplace-card">
                  <div className={`opulse-workplace-icon ${card.iconClass}`}>
                    <span className="material-symbols-outlined">{card.icon}</span>
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="opulse-ecosystem">
          <div className="container">
            <div className="opulse-ecosystem-head">
              <h2>Interactive Features</h2>
            </div>

            <div className="opulse-bento-grid">
              <article className="opulse-bento-main">
                <div>
                  <h3>Interactive Posts</h3>
                  <p>
                    Share updates, media, polls, or events to keep everyone informed and engaged with a
                    modern, social-first interface.
                  </p>
                </div>
                <div className="opulse-posts-mock">
                  <div className="opulse-post-card">
                    <div className="opulse-post-header">
                      <div className="opulse-avatar-dot" />
                      <div className="opulse-line-short" />
                    </div>
                    <div className="opulse-post-lines">
                      <div className="opulse-line-full" />
                      <div className="opulse-line-mid" />
                    </div>
                    <div className="opulse-post-actions">
                      <span className="material-symbols-outlined">favorite</span>
                      <span className="material-symbols-outlined">comment</span>
                      <span className="material-symbols-outlined">share</span>
                    </div>
                  </div>
                  <div className="opulse-chart-card">
                    <span className="material-symbols-outlined">bar_chart</span>
                  </div>
                </div>
              </article>

              <article className="opulse-bento-side">
                <div className="opulse-bento-icon opulse-icon-primary">
                  <span className="material-symbols-outlined">notifications_active</span>
                </div>
                <h3>Smart Notifications</h3>
                <p>
                  Stay in the loop with real-time updates and activity alerts-so you never miss what
                  matters to your role.
                </p>
              </article>

              <article className="opulse-bento-small">
                <span className="material-symbols-outlined opulse-icon-tertiary">hub</span>
                <h3>Group Collaboration</h3>
                <p>
                  Create public or private groups to drive focused conversations and build tight-knit
                  communities.
                </p>
              </article>

              <article className="opulse-bento-small opulse-bento-small-primary-border">
                <span className="material-symbols-outlined opulse-icon-primary">person_search</span>
                <h3>Personalized Profiles</h3>
                <p>
                  Showcase your role, contributions, and recent activity across teams with automated
                  badges.
                </p>
              </article>

              <article className="opulse-bento-small opulse-bento-gradient">
                <span className="material-symbols-outlined opulse-icon-secondary">insights</span>
                <h3>Engagement Insights</h3>
                <p>
                  Track reach, interactions, and impact with built-in post analytics and sentiment data.
                </p>
              </article>

              <article className="opulse-search-row">
                <div className="opulse-search-title">
                  <div className="opulse-search-icon">
                    <span className="material-symbols-outlined">manage_search</span>
                  </div>
                  <h3>Searchable Feed</h3>
                </div>
                <p>
                  Easily navigate posts, mentions, and tags with intuitive filtering and AI-powered search
                  tools.
                </p>
                <div className="opulse-search-box">Search your team...</div>
              </article>
            </div>
          </div>
        </section>

        <section className="opulse-cta">
          <div className="container">
            <div className="opulse-cta-card">
              <h2>Ready to transform your workplace culture?</h2>
              <p>
                Join teams using OPulse to stay connected and inspired every single day.
              </p>
              <div className="opulse-cta-actions">
                <a href={ONBOARDING_URL} className="btn btn-primary opulse-btn-primary">
                  Get Started for Free
                </a>
                <button type="button" className="btn opulse-btn-secondary">
                  Book a Walkthrough
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OPulse;
