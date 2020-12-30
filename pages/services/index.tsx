import Head from 'next/head';
import Intro from 'components/intro';
import Container from 'components/container';
import Layout from 'components/layout';

export default function ServicesPage() {
  return (
    <Layout>
      <Head>
        <title>Our services | Profico</title>
      </Head>
      <Container>
        <Intro text="Our services" />
      </Container>
    </Layout>
  );
}
