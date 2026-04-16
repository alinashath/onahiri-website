import React from 'react';
import './OWork.css';

const OWork = () => {
  const fluidFeatures = [
    {
      icon: 'badge',
      title: 'Flexible Roles',
      description:
        'Dynamic role assignment that evolves with project phases. Assign tasks based on expertise and workload requirements.',
      iconClass: 'owork-icon-primary',
    },
    {
      icon: 'dashboard_customize',
      title: 'Visual Task Boards',
      description:
        'SOP-based working management with intuitive visual boards designed for high-velocity teams. Manage tasks across departments seamlessly.',
      iconClass: 'owork-icon-tertiary',
    },
    {
      icon: 'hub',
      title: 'Global Collaboration',
      description:
        'Real-time synchronization across every node in your network, ensuring speed and quality of work.',
      iconClass: 'owork-icon-secondary',
    },
    {
      icon: 'analytics',
      title: 'AI Report Generation',
      description:
        'Reporting and progress tracking made effortless. AI feature help convert raw data into actionable boardroom-ready insights instantly.',
      iconClass: 'owork-icon-primary',
    },
    {
      icon: 'avg_time',
      title: 'Cognitive Time Tracking',
      description:
        "Passive time tracking that understands context. It does not just clock hours; it maps productivity peaks and resource bottlenecks.",
      iconClass: 'owork-icon-tertiary',
    },
    {
      icon: 'support_agent',
      title: 'Intelligent Support',
      description:
        '24/7 proactive assistance. Our support system identifies potential workflow issues before they become blockers for your team.',
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
              <div className="owork-pill-badge">
                <span className="owork-ping-dot" />
                Introducing Work Weaving
              </div>

              <h1>
                Work Management <span>Simplified</span>
              </h1>

              <p>
                Intelligent project management with fluid task weaving and resource mapping. Manage work
                the way you want, not the other way around.
              </p>

              <div className="owork-hero-actions">
                <button className="btn btn-primary owork-primary-btn">Start Free Trial</button>
                <button className="btn owork-secondary-btn">Book a Demo</button>
              </div>
            </div>

            <div className="owork-hero-visual">
              <div className="owork-hero-image-card">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQNiXEBldY98m8xHy93A79BLSKB0_f5uJZ_G8c6ErVtnADyyY0bW3e1dDIJtedNl_QAdeYVNbX6Dgw3S6FEsJW_NaLre64NWlRRBJXJ7ZM-rcCoBTy1KFfCLO9kIOb_jgZT7-A4saldeGCiq3-AiqRrBOMQpJsEdsPkjjUruIyMu_8HT2LVgZUKsSrfdbPZ_M_CsEirn2FcuzGBJIaCPHpwPp6wO0fNc8Wp47wOqHrR21WloLb-SBBqDW-DmFYol92Wjiu6RaDmTQ"
                  alt="Digital nodes and abstract workplace visualization"
                />
                <div className="owork-floating-badge owork-float-top">Neural Node Active</div>
                <div className="owork-floating-badge owork-float-bottom">99.9% Sync Accuracy</div>
              </div>
            </div>
          </div>
        </section>

        <section className="owork-features">
          <div className="container">
            <div className="owork-section-head">
              <h2>Fluid Productivity by Design</h2>
              <p>
                Every feature is built on our cognitive engine to understand and adapt to your team&apos;s
                unique rhythm.
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
              <h2>Conversations that lead to action</h2>
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

                <div className="owork-weaver-tag">
                  <span className="owork-ping-dot" />
                  Integrated with Task Weaver
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
                      Convert messages into tasks or update status directly from the chat interface with
                      simple command weaving.
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
              Ready to weave <br />
              <span>your work?</span>
            </h2>
            <button className="btn btn-primary owork-primary-btn owork-cta-btn">Get Started for Free</button>
            <p>Join 5,000+ teams weaving the future of productivity on OWork.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OWork;
