import Layout from 'components/Layout';
import HeroSection from 'views/services/HeroSection';
import ServicesDescription from 'views/services/ServicesDescription';

const ServicesPage = () => (
  <Layout title="Our services">
    <HeroSection />
    <ServicesDescription />
  </Layout>
);

export default ServicesPage;
