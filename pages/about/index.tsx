import Layout from 'components/Layout';
import LeadershipSection from 'views/about/LeadershipSection';
import MVPSection from 'views/about/MVPSection';
import OurRules from 'views/about/OurRules';

const AboutPage = () => (
  <Layout title="About us">
    <LeadershipSection />
    <MVPSection />
    <OurRules />
  </Layout>
);

export default AboutPage;
