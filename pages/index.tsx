import Head from 'next/head';
import Intro from 'components/Intro';
import Container from 'components/Container';
import Layout from 'components/Layout';
import Hyperlink from 'components/Hyperlink';
import links from 'config/links';

const HomePage = () => (
  <Layout>
    <Head>
      <title>Profico</title>
    </Head>
    <Container>
      <Intro text="Home" />
      {links.map(({ text, url }, index) => (
        <Hyperlink key={url} href={url}>{`${text}${index !== links.length - 1 ? ' | ' : ''}`}</Hyperlink>
      ))}
    </Container>
  </Layout>
);

export default HomePage;
