import Container from '@material-ui/core/Container';
import Layout from 'components/Layout';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import LeadershipSection from 'views/about/LeadershipSection';
import AchievementsSection from 'views/about/AchievementsSection';
import MVPSection from 'views/about/MVPSection';
import OurRules from 'views/about/OurRules';
import ReferencesSection from 'views/about/ReferencesSection';
import ContactForm from 'components/ContactForm';

const AboutPage = () => {
  const { isMobile } = useBreakpoint();

  return (
    <Layout title="About us" FooterProps={{ hasGreyBackground: !isMobile }}>
      <LeadershipSection />
      <MVPSection />
      <OurRules />
      <AchievementsSection />
      <ReferencesSection />
      <Container maxWidth="xl">
        <ContactForm />
      </Container>
    </Layout>
  );
};

export default AboutPage;
