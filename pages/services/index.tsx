import Head from 'next/head';

import Container from '@material-ui/core/Container';

import Intro from 'components/Intro';
import Layout from 'components/Layout';

const ServicesPage = () => (
  <Layout>
    <Head>
      <title>Our services | Profico</title>
    </Head>
    <Container>
      <Intro text="Our services" />
    </Container>
  </Layout>
);

export default ServicesPage;
