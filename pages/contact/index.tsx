import Head from 'next/head';
import Intro from 'components/Intro';
import Container from 'components/Container';
import Layout from 'components/Layout';

const ContactPage = () => (
  <Layout>
    <Head>
      <title>Contact us | Profico</title>
    </Head>
    <Container>
      <Intro text="Contact us" />
    </Container>
  </Layout>
);

export default ContactPage;
