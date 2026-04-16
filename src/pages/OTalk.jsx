import React from 'react';
import './OTalk.css';

const OTalk = () => {
  const mainFeatures = [
    {
      icon: 'lock_open',
      title: 'Encrypted Messaging',
      description:
        'End-to-end post-quantum encryption ensures your conversations stay private. Metadata scrubbing comes standard on every thread.',
      iconClass: 'otalk-icon-primary',
    },
    {
      icon: 'video_chat',
      title: 'HD Video Chat',
      description:
        'Crystal-clear 4K video conferencing with spatial audio integration. Low-latency protocols designed for distributed global teams.',
      iconClass: 'otalk-icon-secondary',
    },
    {
      icon: 'folder_shared',
      title: 'Integrated File Sharing',
      description:
        'Seamlessly transmit large datasets with automatic virus scanning and tiered permission controls for sensitive documents.',
      iconClass: 'otalk-icon-tertiary',
    },
  ];

  const productivityItems = [
    {
      icon: 'forum',
      title: 'Contextual Threads',
      description:
        'Organize discussions by project, phase, or priority with AI-suggested tagging systems.',
      iconClass: 'otalk-icon-primary',
    },
    {
      icon: 'person_search',
      title: 'Rich Presence',
      description:
        'Know exactly when your team is focused, in a meeting, or available for quick syncs.',
      iconClass: 'otalk-icon-secondary',
    },
    {
      icon: 'bolt',
      title: 'Smart Action Triggers',
      description:
        'Convert messages to tasks or calendar invites instantly with natural language processing.',
      iconClass: 'otalk-icon-tertiary',
    },
  ];

  return (
    <div className="otalk-page">
      <main className="otalk-main">
        <div className="otalk-bg-glow" />

        <section className="otalk-hero">
          <div className="container otalk-hero-grid">
            <div className="otalk-hero-content">
              <div className="otalk-release-pill">
                <span className="otalk-pill-dot" />
                New v4.0 Release
              </div>
              <h1>
                OTalk: Secure,
                <br />
                <span>High-Fidelity</span>
                <br />
                Communication
              </h1>
              <p>
                Experience the next generation of enterprise connectivity. OTalk provides an encrypted
                environment for teams that demand absolute privacy without sacrificing performance.
              </p>
              <div className="otalk-hero-actions">
                <button className="btn btn-primary otalk-btn-primary">Initialize Secure Session</button>
                <button className="btn otalk-btn-secondary">View Documentation</button>
              </div>
            </div>

            <div className="otalk-hero-visual">
              <div className="otalk-hero-image-card">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8ulfI1HLNyS1iq_bX18OGORW0dB4ZwID-4-6d7Hj0vXd8nr-WvROCUBg9NNlNIMO0M-DAcV4ahvFpcWQzH4vnxKkd2flWPFKQ4tmlUb_UXEytfuaJojsD8L5CYqxn2XXnjgoA9wQa5qel8C_zFLt0V71MWZw1pxiFYZJ_apHvyBN9YbEipjgvs42avNMrrteQHdXhTQYsLuAPvxpqIiQoEG2Hgw-HS-HpnM03iKc7kbOV0db03FobTYjTHd8ZcPLqx5KyYklyfO4"
                  alt="Secure interface"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="otalk-main-features">
          <div className="container">
            <div className="otalk-feature-grid">
              {mainFeatures.map((feature) => (
                <article key={feature.title} className="otalk-feature-card">
                  <div className={`otalk-feature-icon ${feature.iconClass}`}>
                    <span className="material-symbols-outlined">{feature.icon}</span>
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="otalk-productivity">
          <div className="container otalk-productivity-grid">
            <div className="otalk-productivity-list">
              {productivityItems.map((item) => (
                <article key={item.title} className="otalk-productivity-item">
                  <div className={`otalk-productivity-icon ${item.iconClass}`}>
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="otalk-productivity-copy">
              <h2>
                Communication that
                <br />
                <span>keeps work moving</span>
              </h2>
              <p>
                OTalk is not just a chat tool-it is a productivity hub. By integrating deep context into
                every interaction, we eliminate the noise and focus on what matters: your results.
              </p>
              <button className="otalk-link-btn">
                Explore Productivity Features
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>

        <section className="otalk-cta">
          <div className="container">
            <div className="otalk-cta-card">
              <h2>
                Ready to elevate your
                <br />
                team&apos;s connectivity?
              </h2>
              <p>
                Join thousands of high-performance teams using OTalk to secure their digital workspace.
              </p>
              <div className="otalk-cta-actions">
                <button className="btn btn-primary otalk-btn-primary">Start Free Trial</button>
                <button className="btn otalk-btn-secondary">Schedule a Demo</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OTalk;
