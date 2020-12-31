import Head from 'next/head';
import Intro from 'components/Intro';
import Container from 'components/Container';
import Layout from 'components/Layout';

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
