import Layout from 'components/Layout';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import LeadershipSection from 'views/about/LeadershipSection';
import AchievementsSection from 'views/about/AchievementsSection';
import MVPSection from 'views/about/MVPSection';
import OurRules from 'views/about/OurRules';
import ReferencesSection from 'views/about/ReferencesSection';
import IntroductionSection from 'views/about/IntroductionSection';

const AboutPage = () => {
  const { isMobile } = useBreakpoint();

  return (
    <Layout title="About us" FooterProps={{ bgColor: !isMobile ? 'grey' : undefined }}>
      <IntroductionSection />
      <LeadershipSection />
      <MVPSection />
      <OurRules />
      <AchievementsSection />
      <ReferencesSection />
    </Layout>
  );
};

export default AboutPage;
