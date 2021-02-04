import React from 'react';
import HeroSection from './HeroSection';
import WhatWeDoSection from './WhatWeDoSection';
import OurProjectsSection from './OurProjectsSection';
import ReferencesSection from './ReferencesSection';
import BlogSection from './BlogSection';
import CultureSection from './CultureSection';

const Home: React.FC = () => (
  <>
    <HeroSection />
    <WhatWeDoSection />
    <OurProjectsSection />
    <ReferencesSection />
    <BlogSection />
    <CultureSection />
  </>
);

export default Home;
