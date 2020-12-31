import Head from 'next/head';
import Intro from 'components/Intro';
import Container from 'components/Container';
import Layout from 'components/Layout';

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
