import React from 'react';
import Layout from 'components/Layout';
import HeroSection from 'views/summer-camp/HeroSection';
import AboutSummerCamp from 'views/summer-camp/AboutSummerCamp';
import SummerCampPerks from 'views/summer-camp/SummerCampPerks';
import AboutMentors from 'views/summer-camp/AboutMentors';
import SummerCampFocusPoints from 'views/summer-camp/SummerCampFocusPoints';
import IdealCandidateSection from 'views/summer-camp/IdealCandidateSection';
import LastYearSection from 'views/summer-camp/LastYearSection';
import SummerCampApplyForm from 'views/summer-camp/SummerCampApplyForm';

const ProficoSummerCamp: React.FC = () => (
  <Layout title="Summer Camp" theme="dark" FooterProps={{ bgColor: 'blue' }}>
    <HeroSection />
    <AboutSummerCamp />
    <SummerCampPerks />
    <SummerCampFocusPoints />
    <AboutMentors />
    <LastYearSection />
    <IdealCandidateSection />
    <SummerCampApplyForm />
  </Layout>
);

export default ProficoSummerCamp;
