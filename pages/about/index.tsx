import Head from 'next/head';

import Container from '@material-ui/core/Container';

import Intro from 'components/Intro';
import Layout from 'components/Layout';

const AboutPage = () => (
  <Layout>
    <Head>
      <title>About us | Profico</title>
    </Head>
    <Container>
      <Intro text="About us" />
    </Container>
  </Layout>
);

export default AboutPage;
