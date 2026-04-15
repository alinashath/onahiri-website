import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureBlock from '../components/FeatureBlock';

const Reports = () => {
  return (
    <div className="page-animate">
      <HeroSection 
        titleHtml="Turn data into <span class='gradient-text'>decisions.</span>"
        subtitle="Create powerful, customizable dashboards and reports using any available data fields."
      />
      
      <FeatureBlock 
        title="Custom Dashboards"
        description="Design your own dashboard views using filters, fields, and chart types. Switch between data and visual mode with one click."
        features={[
          "Build personalized dashboards with live metrics",
          "Smart field selection for relevant tracking",
          "Easy sharing with your team"
        ]}
      />
      
      <FeatureBlock 
        title="Insightful Analytics"
        description="Track task progress, effort, time spent, priorities, and statuses—aggregated by field and filterable by date range."
        features={[
          "Real-time chart updates without manual refresh",
          "Time reporting with full breakdowns",
          "Analyze time spent vs. effort across tasks"
        ]}
        reverse={true}
      />
      
      <FeatureBlock 
        title="Drag & Drop Visualization"
        description="Add charts and rearrange widgets directly from the UI. Bar, pie, and stat blocks supported for dynamic insights."
        features={[
          "Modular layout arrangement",
          "Combine visual and text analytics",
          "Interactive Report Builder"
        ]}
      />
    </div>
  );
};

export default Reports;
