import Layout from 'components/Layout';
import CheatsheatSection from 'views/services/CheatsheatSection';
import HeroSection from 'views/services/HeroSection';
import ServicesDescription from 'views/services/ServicesDescription';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import ToolboxSection from 'views/services/ToolboxSection';

const ServicesPage = () => {
  const { isMobile } = useBreakpoint();

  return (
    <Layout title="Our services" FooterProps={{ hasGreyBackground: !isMobile }}>
      <HeroSection />
      <ServicesDescription />
      <ToolboxSection />
      <CheatsheatSection />
    </Layout>
  );
};

export default ServicesPage;
