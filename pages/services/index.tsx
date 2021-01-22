import Container from '@material-ui/core/Container';

import Intro from 'components/Intro';
import Layout from 'components/Layout';

const ServicesPage = () => (
  <Layout title="Our services">
    <Container>
      <Intro text="Our services" />
    </Container>
  </Layout>
);

export default ServicesPage;
