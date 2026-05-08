import React from 'react';
import { ONBOARDING_URL } from '../constants/links';
import './OTalk.css';

const OTalk = () => {
  const mainFeatures = [
    {
      icon: 'lock_open',
      title: 'Stay Connected in Real Time',
      description:
        'Keeps your teams in sync with seamless communication',
      iconClass: 'otalk-icon-primary',
    },
    {
      icon: 'video_chat',
      title: 'Link Coversations to Taks',
      description:
        'From direct chats to group discussions, the system adapts to how your team communicates, collaborates, and shares information.',
      iconClass: 'otalk-icon-secondary',
    },
    {
      icon: 'folder_shared',
      title: 'Role-Based Access Control',
      description:
        'Manage chats with confidence using permission settings that give the right people the right level of access.',
      iconClass: 'otalk-icon-tertiary',
    },
  ];

  const productivityItems = [
    {
      icon: 'chat',
      title: 'Direct and Group Chat',
      description:
        'Connect one-on-one or bring teams together in dynamic group conversations.',
      iconClass: 'otalk-icon-primary',
    },
    {
      icon: 'topic',
      title: 'Message Versatility',
      description:
        'Send text, files, audio, and links—all from a single conversation thread.',
      iconClass: 'otalk-icon-secondary',
    },
    {
      icon: 'sync',
      title: 'Real-time sync',
      description:
        'Experience live typing indicators, read receipts, and instant message delivery.',
      iconClass: 'otalk-icon-tertiary',
    },
    {
      icon: 'admin_panel_settings',
      title: 'Role based access',
      description:
        'Assign roles like Admin or Participant to control permissions in each chat.',
      iconClass: 'otalk-icon-primary',
    },
    {
      icon: 'attach_file',
      title: 'Intergrated file sharing',
      description:
        'Share and preview documents, images, and recordings without leaving the chat.',
      iconClass: 'otalk-icon-secondary',
    },
    {
      icon: 'history',
      title: 'Conversation History',
      description:
        'Easily search, track, and revisit every update-organized and always accessible.',
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
              <h1>
                Stay Connected with <span>OTalk</span>
              </h1>
              <p>
                Assign tasks, share updates, and keep things moving-without breaking the flow.
              </p>
              <div className="otalk-hero-actions">
                <a href={ONBOARDING_URL} className="btn btn-primary otalk-btn-primary">
                  Start for Free
                </a>
                <button type="button" className="btn otalk-btn-secondary">
                  View Documentation
                </button>
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
              <h2>Smart Conversations, Real Results</h2>
              <p>
                OTalk brings clarity, speed, and structure to every conversation-right where work happens.
              </p>
              <a href={ONBOARDING_URL} className="btn btn-primary otalk-btn-primary">
                Start for Free
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OTalk;
