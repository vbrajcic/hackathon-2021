import Head from 'next/head';
import Intro from 'components/Intro';
import Container from 'components/Container';
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
