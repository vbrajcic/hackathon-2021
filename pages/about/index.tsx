import Container from '@material-ui/core/Container';

import Intro from 'components/Intro';
import Layout from 'components/Layout';

const AboutPage = () => (
  <Layout title="About us">
    <Container>
      <Intro text="About us" />
    </Container>
  </Layout>
);

export default AboutPage;
