import Head from 'next/head';
import Intro from 'components/Intro';
import Container from 'components/Container';
import Layout from 'components/Layout';

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
