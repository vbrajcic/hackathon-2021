import Head from 'next/head';
import Intro from 'components/intro';
import Container from 'components/container';
import Layout from 'components/layout';

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About us | Profico</title>
      </Head>
      <Container>
        <Intro text="About us" />
      </Container>
    </Layout>
  );
}
