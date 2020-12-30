import Head from 'next/head';
import Intro from 'components/intro';
import Container from 'components/container';
import Layout from 'components/layout';

export default function WorkPage() {
  return (
    <Layout>
      <Head>
        <title>Work | Profico</title>
      </Head>
      <Container>
        <Intro text="Our work" />
      </Container>
    </Layout>
  );
}
