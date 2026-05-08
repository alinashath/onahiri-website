import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureBlock from '../components/FeatureBlock';

const Templates = () => {
  return (
    <div className="page-animate">
      <HeroSection 
        titleHtml="Standardize what works, <span class='gradient-text'>scale with ease.</span>"
        subtitle="Streamline your operations using reusable task templates and forms—no need to start from scratch every time."
      />
      
      <FeatureBlock 
        title="Template Library"
        description="Browse, manage, and preview task templates designed to streamline work across your organization."
        features={[
          "Reusable templates with clear workflows",
          "Organized for easy access and discovery",
          "Predefined custom fields and role assignments"
        ]}
      />
      
      <FeatureBlock 
        title="Workflow Standardization"
        description="Create structured task templates that guide every step of your process—from kickoff to completion."
        features={[
          "Define custom workflow stages",
          "Remove ambiguity and ensure consistency",
          "Permission-based template control",
          "Version management to track draft and active templates"
        ]}
        reverse={true}
      />
    </div>
  );
};

export default Templates;
