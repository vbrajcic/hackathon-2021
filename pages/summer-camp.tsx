import React from 'react';
import Layout from 'components/Layout';
import HeroSection from 'views/summer-camp/HeroSection';
import AboutSummerCamp from 'views/summer-camp/AboutSummerCamp';
import SummerCampPerks from 'views/summer-camp/SummerCampPerks';
import IdealCandidate from 'views/summer-camp/IdealCandidate';

const ProficoSummerCamp: React.FC = () => (
  <Layout title="Summer Camp" theme="dark">
    <HeroSection />
    <AboutSummerCamp />
    <SummerCampPerks />
    <IdealCandidate />
  </Layout>
);

export default ProficoSummerCamp;
