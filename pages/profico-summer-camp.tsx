import React from 'react';
import Layout from 'components/Layout';
import HeroSection from 'views/profico-summer-camp/HeroSection';
import AboutSummerCamp from 'views/profico-summer-camp/AboutSummerCamp';

const ProficoSummerCamp: React.FC = () => (
  <Layout title="Summer Camp" theme="dark">
    <HeroSection />
    <AboutSummerCamp />
  </Layout>
);

export default ProficoSummerCamp;
