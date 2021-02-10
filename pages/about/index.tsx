import Layout from 'components/Layout';
import LeadershipSection from 'views/about/LeadershipSection';
import AchievementsSection from 'views/about/AchievementsSection';

const AboutPage = () => (
  <Layout title="About us">
    <LeadershipSection />
    <AchievementsSection />
  </Layout>
);

export default AboutPage;
