import Head from 'next/head';
import Intro from 'components/Intro';
import Container from 'components/Container';
import Layout from 'components/Layout';

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
