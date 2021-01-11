import Head from 'next/head';
import Intro from 'components/Intro';
import Container from '@material-ui/core/Container';
import Layout from 'components/Layout';

const WorkPage = () => (
  <Layout>
    <Head>
      <title>Work | Profico</title>
    </Head>
    <Container>
      <Intro text="Our work" />
    </Container>
  </Layout>
);

export default WorkPage;
