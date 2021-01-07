import Head from 'next/head';
import Container from '@material-ui/core/Container';

import Intro from 'components/Intro';
import Layout from 'components/Layout';
import Hyperlink from 'components/Hyperlink';
import ContactForm from 'components/ContactForm';
import links from 'config/links';

const HomePage = () => (
  <Layout>
    <Head>
      <title>Profico</title>
    </Head>
    <Container maxWidth="xl">
      <Intro text="Home" />
      {links.map(({ text, url }, index) => (
        <Hyperlink key={url} href={url}>{`${text}${index !== links.length - 1 ? ' | ' : ''}`}</Hyperlink>
      ))}
      <ContactForm />
    </Container>
  </Layout>
);

export default HomePage;
