import Head from 'next/head';
import Intro from 'components/intro';
import Container from 'components/container';
import Layout from 'components/layout';

export default function Work() {
  return (
    <Layout>
      <Head>
        <title>Single case study | Profico</title>
      </Head>
      <Container>
        <Intro text="Single case study" />
      </Container>
    </Layout>
  );
}
