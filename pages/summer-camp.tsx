import React from 'react';
import Layout from 'components/Layout';
import HeroSection from 'views/summer-camp/HeroSection';
import AboutSummerCamp from 'views/summer-camp/AboutSummerCamp';
import SummerCampPerks from 'views/summer-camp/SummerCampPerks';
import AboutMentors from 'views/summer-camp/AboutMentors';
import SummerCampFocusPoints from 'views/summer-camp/SummerCampFocusPoints';
import IdealCandidateSection from 'views/summer-camp/IdealCandidateSection';

const ProficoSummerCamp: React.FC = () => (
  <Layout title="Summer Camp" theme="dark">
    <HeroSection />
    <AboutSummerCamp />
    <SummerCampPerks />
    <SummerCampFocusPoints />
    <AboutMentors />
    <IdealCandidateSection />
  </Layout>
);

export default ProficoSummerCamp;
