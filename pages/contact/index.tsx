import Head from 'next/head';
import Intro from 'components/intro';
import Container from 'components/container';
import Layout from 'components/layout';

export default function ContactPage() {
  return (
    <Layout>
      <Head>
        <title>Contact us | Profico</title>
      </Head>
      <Container>
        <Intro text="Contact us" />
      </Container>
    </Layout>
  );
}
