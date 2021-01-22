import Container from '@material-ui/core/Container';

import Intro from 'components/Intro';
import Layout from 'components/Layout';

const ContactPage = () => (
  <Layout title="Contact us">
    <Container>
      <Intro text="Contact us" />
    </Container>
  </Layout>
);

export default ContactPage;
