import Head from 'next/head';
import Intro from 'components/Intro';
import Container from 'components/Container';
import Layout from 'components/Layout';
import Hyperlink from 'components/Hyperlink';

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Profico</title>
      </Head>
      <Container>
        <Intro text="Home" />
        <Hyperlink
          href="/work"
          AnchorProps={{
            dangerouslySetInnerHTML: { __html: 'Work' },
          }}
        />
        {' | '}
        <Hyperlink
          href="/services"
          AnchorProps={{
            dangerouslySetInnerHTML: { __html: 'Services' },
          }}
        />
        {' | '}
        <Hyperlink
          href="/about"
          AnchorProps={{
            dangerouslySetInnerHTML: { __html: 'About us' },
          }}
        />
        {' | '}
        <Hyperlink
          href="/careers"
          AnchorProps={{
            dangerouslySetInnerHTML: { __html: 'Careers' },
          }}
        />
        {' | '}
        <Hyperlink
          href="/blog"
          AnchorProps={{
            dangerouslySetInnerHTML: { __html: 'Blog' },
          }}
        />
        {' | '}
        <Hyperlink
          href="/contact"
          AnchorProps={{
            dangerouslySetInnerHTML: { __html: 'Contact us' },
          }}
        />
      </Container>
    </Layout>
  );
}
