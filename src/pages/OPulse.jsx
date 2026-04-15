import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureBlock from '../components/FeatureBlock';

const OPulse = () => {
  return (
    <div className="page-animate">
      <HeroSection 
        titleHtml="OPulse <br/>Build Culture. <span class='gradient-text'>Share Ideas.</span> Stay in Sync."
        subtitle="OPulse is your organization's social collaboration layer—connecting people, ideas, and updates in one unified space."
      />
      
      <FeatureBlock 
        title="Foster a Connected Workplace"
        description="OPulse strengthens team culture with a space for open sharing, engagement, and updates—keeping everyone aligned and inspired."
        features={[
          "Dynamic Updates: Create posts, polls, and announcements",
          "Live Feeds: Real-time updates with comments and reactions",
          "Group Participation: Join focused group spaces"
        ]}
        visualContent={<img src="/opulse-art.png" alt="OPulse Feature" className="feature-artwork" />}
      />
      
      <FeatureBlock 
        title="Your Social Hub for Work"
        description="Interactive posts and smarter engagement tracking to understand what resonates with your team."
        features={[
          "Interactive Content: Share updates, images, and events",
          "Engagement Insights: Track views and reach",
          "Smart Notifications to never miss what matters"
        ]}
        reverse={true}
      />
    </div>
  );
};

export default OPulse;
