import React from 'react';
import Layout from 'components/Layout';
import HeroSection from 'views/summer-camp/HeroSection';
import AboutSummerCamp from 'views/summer-camp/AboutSummerCamp';
import SummerCampPerks from 'views/summer-camp/SummerCampPerks';
import AboutMentors from 'views/summer-camp/AboutMentors';
import SummerCampFocusPoints from 'views/summer-camp/SummerCampFocusPoints';
import IdealCandidate from 'views/summer-camp/IdealCandidate';
import LastYearSection from 'views/summer-camp/LastYearSection';

const ProficoSummerCamp: React.FC = () => (
  <Layout title="Summer Camp" theme="dark">
    <HeroSection />
    <AboutSummerCamp />
    <SummerCampPerks />
    <SummerCampFocusPoints />
    <AboutMentors />
    <LastYearSection />
    <IdealCandidate />
  </Layout>
);

export default ProficoSummerCamp;
