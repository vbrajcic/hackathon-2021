import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Edges } from 'types/common';
import Post from 'types/posts/post';
import Container from 'components/container';
import MoreStories from 'components/moreStories';
import HeroPost from 'components/heroPost';
import Intro from 'components/intro';
import Layout from 'components/layout';
import { getAllPostsForHome } from 'lib/api';

type CareersPageProps = {
  allPosts: Edges<Post>;
  preview: boolean;
};

export default function CareersPage({ allPosts: { edges }, preview }: CareersPageProps) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>Profico</title>
      </Head>
      <Container>
        <Intro text="Careers" />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage?.node}
            date={heroPost.date}
            author={heroPost.author?.node}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  type Data = {
    edges: {
      node: Post;
    }[];
  };

  const allPosts: Data = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
};
