import React from 'react';
import Head from 'next/head';
import Post from 'types/posts/post';
import Container from '@material-ui/core/Container';
import RelatedPosts from 'components/RelatedPosts';
import HeroPost from 'components/HeroPost';
import Intro from 'components/Intro';
import Layout from 'components/Layout';
import useFactory from 'utils/hooks/useFactory';

import { getAllBlogPosts } from 'lib/api';
import { GetServerSideProps } from 'next';
import { Edges } from 'types/common';

interface BlogPageProps {
  allPosts: Edges<Post>;
  preview: boolean;
}

const BlogPage: React.FC<BlogPageProps> = ({ allPosts: { edges }, preview }) => {
  const { heroPost, morePosts } = useFactory(() => {
    const [hero, ...more] = edges;

    return { heroPost: hero ? hero.node : undefined, morePosts: more };
  });

  return (
    <Layout preview={preview}>
      <Head>
        <title>Profico</title>
      </Head>
      <Container>
        <Intro text="Blog" />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage?.node}
            date={heroPost.date}
            author={heroPost.author?.node}
            slug={`/blog/${heroPost.slug}`}
            excerpt={heroPost.excerpt}
          />
        )}
        <RelatedPosts posts={morePosts} page="blog" />
      </Container>
    </Layout>
  );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps<BlogPageProps> = async ({ preview = false }) => {
  const allPosts = await getAllBlogPosts(preview);

  return {
    props: {
      allPosts,
      preview,
    },
  };
};
