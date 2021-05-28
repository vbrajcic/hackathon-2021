import React from 'react';
import Layout from 'components/Layout';
import HeroSection from 'views/profico-summer-camp/HeroSection';
import AboutSummerCamp from 'views/profico-summer-camp/AboutSummerCamp';
import SummerCampPerks from 'views/profico-summer-camp/SummerCampPerks';

const ProficoSummerCamp: React.FC = () => (
  <Layout title="Summer Camp" theme="dark">
    <HeroSection />
    <AboutSummerCamp />
    <SummerCampPerks />
  </Layout>
);

export default ProficoSummerCamp;
