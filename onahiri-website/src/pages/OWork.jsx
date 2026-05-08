import React from 'react';
import { ONBOARDING_URL } from '../constants/links';
import './OWork.css';

const OWork = () => {
  const fluidFeatures = [
    {
      icon: 'manage_accounts',
      title: 'Team Roles and Assignment',
      description: 'Assign roles and responsibilities clearly.',
      iconClass: 'owork-icon-primary',
    },
    {
      icon: 'view_kanban',
      title: 'Visual Task Boards',
      description:
        'Get full visibility into your team’s work and progress.',
      iconClass: 'owork-icon-tertiary',
    },
    {
      icon: 'forum',
      title: 'Real-time Collaboration',
      description:
        'Seamless teamwork, built into every task. Chat panels, live updates, and realtime alerts.',
      iconClass: 'owork-icon-secondary',
    },
    {
      icon: 'auto_graph',
      title: 'AI Report Generation',
      description:
        'Make reporting and progress tracking effortless with AI.',
      iconClass: 'owork-icon-primary',
    },
    {
      icon: 'account_tree',
      title: 'Structured Workflows',
      description: 'Work smarter with step-by-step task flows.',
      iconClass: 'owork-icon-tertiary',
    },
    {
      icon: 'support_agent',
      title: 'Intelligent Support',
      description:
        'Identify potential workflow issues before they become blockers for your team.',
      iconClass: 'owork-icon-secondary',
    },
  ];

  return (
    <div className="owork-page">
      <main className="owork-main">
        <div className="owork-atmospheric-glow owork-glow-top" />
        <div className="owork-atmospheric-glow owork-glow-bottom" />

        <section className="owork-hero">
          <div className="container owork-hero-grid">
            <div className="owork-hero-content">
              <h1>
                Stay Organised with <span>OWork</span>
              </h1>

              <p>
                Manage work the way you want, not the other way around.
              </p>

              <div className="owork-hero-actions">
                <a href={ONBOARDING_URL} className="btn btn-primary owork-primary-btn">
                  Start Free Trial
                </a>
                <button type="button" className="btn owork-secondary-btn">
                  Book a Demo
                </button>
              </div>
            </div>

            <div className="owork-hero-visual">
              <div className="owork-hero-image-card">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQNiXEBldY98m8xHy93A79BLSKB0_f5uJZ_G8c6ErVtnADyyY0bW3e1dDIJtedNl_QAdeYVNbX6Dgw3S6FEsJW_NaLre64NWlRRBJXJ7ZM-rcCoBTy1KFfCLO9kIOb_jgZT7-A4saldeGCiq3-AiqRrBOMQpJsEdsPkjjUruIyMu_8HT2LVgZUKsSrfdbPZ_M_CsEirn2FcuzGBJIaCPHpwPp6wO0fNc8Wp47wOqHrR21WloLb-SBBqDW-DmFYol92Wjiu6RaDmTQ"
                  alt="Digital nodes and abstract workplace visualization"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="owork-features">
          <div className="container">
            <div className="owork-section-head">
              <h2>SOP based work management made easy.</h2>
              <p>
                It&apos;s flexible, intuitive, and built to move with your momentum.
              </p>
            </div>

            <div className="owork-feature-grid">
              {fluidFeatures.map((feature) => (
                <article key={feature.title} className="owork-feature-card">
                  <div className={`owork-feature-icon ${feature.iconClass}`}>
                    <span className="material-symbols-outlined">{feature.icon}</span>
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="owork-messaging">
          <div className="container">
            <div className="owork-messaging-head">
              <span>Smart Messaging Features</span>
              <h2>Improve quality of work with messaging.</h2>
            </div>

            <div className="owork-messaging-grid">
              <article className="owork-context-card">
                <div>
                  <h4>Contextual Communication</h4>
                  <p>
                    Messaging is no longer a separate silo. OWork integrates discussions directly into
                    your workflow, helping keep work in progress and facilitating deep dives into specific
                    tasks and assignments without losing momentum.
                  </p>

                  <div className="owork-context-list">
                    <div className="owork-context-item">
                      <div className="owork-context-icon owork-icon-primary">
                        <span className="material-symbols-outlined">alternate_email</span>
                      </div>
                      <div>
                        <h5>Rich Interaction</h5>
                        <p>
                          Mentions, emojis, and reactions to keep the team engaged and acknowledge progress
                          instantly.
                        </p>
                      </div>
                    </div>

                    <div className="owork-context-item">
                      <div className="owork-context-icon owork-icon-tertiary">
                        <span className="material-symbols-outlined">attach_file</span>
                      </div>
                      <div>
                        <h5>Seamless Context</h5>
                        <p>
                          Audio notes, image uploads, and document sharing designed for high-velocity
                          information exchange.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </article>

              <div className="owork-messaging-side">
                <article className="owork-side-card">
                  <div className="owork-side-icon owork-icon-primary">
                    <span className="material-symbols-outlined">forum</span>
                  </div>
                  <div>
                    <h4>Threaded Replies</h4>
                    <p>
                      Keep discussions organized and on-task. Branch off into specific topics without
                      cluttering the main project feed.
                    </p>
                  </div>
                </article>

                <article className="owork-side-card">
                  <div className="owork-side-icon owork-icon-tertiary">
                    <span className="material-symbols-outlined">quick_phrases</span>
                  </div>
                  <div>
                    <h4>Smart Action Triggers</h4>
                    <p>
                      Convert messages into tasks or update status directly from the chat interface.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="owork-cta">
          <div className="owork-cta-bg" />
          <div className="container owork-cta-inner">
            <h2>
              Ready to make work easy?
            </h2>
            <a href={ONBOARDING_URL} className="btn btn-primary owork-primary-btn owork-cta-btn">
              Get Started for Free
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OWork;
