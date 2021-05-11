import React from 'react';
import Container from '@material-ui/core/Container';
import PostBody from 'components/PostBody';
import PostHeader from 'components/PostHeader';
import Layout from 'components/Layout';
import staticPages from 'config/staticPages';

interface StaticPageProps {
  page: string;
}

const StaticPage: React.FC<StaticPageProps> = ({ page }) => {
  const staticPageData = staticPages.find(staticPage => staticPage.id === page);

  if (!staticPageData) return null;

  return (
    <Layout title={staticPageData.title}>
      <article>
        <PostHeader title={staticPageData.title} excerpt={staticPageData.excerpt} template="static" />
        <Container maxWidth="xl" disableGutters>
          <PostBody content={staticPageData.body} />
        </Container>
      </article>
    </Layout>
  );
};

export default StaticPage;
