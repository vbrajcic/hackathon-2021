import Layout from 'components/Layout';
import LeadershipSection from 'views/about/LeadershipSection';
import AchievementsSection from 'views/about/AchievementsSection';
import OurRules from 'views/about/OurRules';

const AboutPage = () => (
  <Layout title="About us">
    <LeadershipSection />
    <OurRules />
    <AchievementsSection />
  </Layout>
);

export default AboutPage;
