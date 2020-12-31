import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Edges } from 'types/common';
import Post from 'types/posts/post';
import Container from 'components/Container';
import RelatedPosts from 'components/RelatedPosts';
import HeroPost from 'components/HeroPost';
import Intro from 'components/Intro';
import Layout from 'components/Layout';
import { getAllPostsForHome } from 'lib/api';

interface BlogPageProps {
  allPosts: Edges<Post>;
  preview: boolean;
}

const BlogPage: React.FC<BlogPageProps> = ({ allPosts: { edges }, preview }) => {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

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
