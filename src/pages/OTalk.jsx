import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureBlock from '../components/FeatureBlock';

const OTalk = () => {
  return (
    <div className="page-animate">
      <HeroSection 
        titleHtml="OTalk <br/><span class='gradient-text'>Smart Conversations</span>, Real Results."
        subtitle="OTalk brings your team together with fast, focused, and fully integrated chat—designed to keep work flowing and teams aligned in real time."
      />
      
      <FeatureBlock 
        title="Stay Connected in Real Time"
        description="Keeps your team in sync with seamless, instant communication—whether you're sharing quick updates or managing complex projects."
        features={[
          "Instant Messaging: Send and receive messages with zero delay",
          "Live Indicators: See who's online, typing, or reading",
          "Smart Notifications: Stay updated without being overwhelmed"
        ]}
        visualContent={<img src="/otalk-art.png" alt="OTalk Feature" className="feature-artwork" />}
      />
      
      <FeatureBlock 
        title="Conversations That Fit Your Workflow"
        description="From direct chats to group discussions, the system adapts to how your team communicates."
        features={[
          "Flexible Chat Types: One-on-one and group messaging",
          "Rich Message Formats: Share text, files, audio, video",
          "Organized Threads: Keep discussions clear and contextual"
        ]}
        reverse={true}
      />
      
      <FeatureBlock 
        title="Secure, Role-Based Access"
        description="Manage chats with confidence using permission settings that give the right people the right level of access."
        features={[
          "Role Management: Assign Creator, Admin, or Participant",
          "Controlled Access: Limit who can invite or edit members",
          "Privacy & Compliance measures built-in"
        ]}
      />
    </div>
  );
};

export default OTalk;
