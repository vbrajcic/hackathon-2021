import React from 'react';
import Layout from 'components/Layout';
import HeroSection from 'views/summer-camp/HeroSection';
import AboutSummerCamp from 'views/summer-camp/AboutSummerCamp';
import SummerCampPerks from 'views/summer-camp/SummerCampPerks';

const ProficoSummerCamp: React.FC = () => (
  <Layout title="Summer Camp" theme="dark">
    <HeroSection />
    <AboutSummerCamp />
    <SummerCampPerks />
  </Layout>
);

export default ProficoSummerCamp;
