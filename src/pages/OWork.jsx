import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureBlock from '../components/FeatureBlock';

const OWork = () => {
  return (
    <div className="page-animate">
      <HeroSection 
        titleHtml="OWork <br/><span class='gradient-text'>Task Management</span> Made Simple."
        subtitle="OWork helps you streamline your workflow—whether you're planning a project, tracking progress, or collaborating with your team."
      />
      
      <FeatureBlock 
        title="Visual Task Boards"
        description="Organize tasks with ease using interactive task cards that display what matters most to your team."
        features={[
          "Task name, start date, and progress bar",
          "Assigned team members with avatars",
          "Drag-and-drop movement between status columns",
          "Quick hover for extra details"
        ]}
        visualContent={<img src="/owork-art.png" alt="OWork Feature" className="feature-artwork" />}
      />
      
      <FeatureBlock 
        title="Detailed Task Panels"
        description="Click any task to access the information you need in a beautifully designed panel."
        features={[
          "Tabs for: Basic info, custom fields, workflows, roles",
          "Edit inline: Names, descriptions, due dates, priority",
          "Track progress: Update completion percentages"
        ]}
        reverse={true}
      />
      
      <FeatureBlock 
        title="Structured Workflows"
        description="Work smarter with step-by-step task flows designed to ensure nothing is missed."
        features={[
          "Mark steps completed to auto-update progress",
          "Revert steps if needed",
          "Visual workflow tracking"
        ]}
      />
    </div>
  );
};

export default OWork;
