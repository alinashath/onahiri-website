import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureBlock from '../components/FeatureBlock';

const PeopleAndPlaces = () => {
  return (
    <div className="page-animate">
      <HeroSection 
        titleHtml="<span class='gradient-text'>People & Places</span>"
        subtitle="Manage and visualise staff information and define access controls and how work flows within teams and organisation as a whole."
      />
      
      <FeatureBlock 
        title="Unified Staff Directory"
        description="View and manage employee records with detailed personal, employment, and access-level information—all in one centralized panel."
        features={[
          "Complete staff profiles",
          "Maintain detailed centralized records",
          "Connected directory linking people to teams"
        ]}
      />
      
      <FeatureBlock 
        title="Interactive Org Charts"
        description="Navigate your company structure with interactive org charts. Understand reporting lines and unit relationships at a glance."
        features={[
          "Visualize reporting lines",
          "Dynamic, expandable organization charts",
          "See who holds what role"
        ]}
        reverse={true}
      />
      
      <FeatureBlock 
        title="Unit-Level Control"
        description="Define units, assign parent-child hierarchies, and manage member roles."
        features={[
          "Department-level management",
          "Live status indicators and real-time status tracking",
          "Linked contextual roles"
        ]}
      />
    </div>
  );
};

export default PeopleAndPlaces;
