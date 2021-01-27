import React from 'react';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Container from '@material-ui/core/Container';
import PostBody from 'components/PostBody';
import PostHeader from 'components/PostHeader';
import Layout from 'components/Layout';
import ContactForm from 'components/ContactForm';
import PostTitle from 'components/PostTitle';
import AuthorInfo from 'views/blog/AuthorInfo';

import { getAllPostsWithSlug, getPostAndMorePosts } from 'lib/api';
import { GetPostAndMorePostsResult } from 'lib/queries';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

type BlogPostProps = GetPostAndMorePostsResult & {
  preview: boolean;
};

const BlogPost: React.FC<BlogPostProps> = ({ post, preview }) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview} theme="dark" title={post?.title}>
      {router.isFallback ? (
        <Container maxWidth="xl" disableGutters>
          <PostTitle title="Loading…" />
        </Container>
      ) : (
        <>
          <article>
            <Head>
              <meta property="og:image" content={post.featuredImage?.node?.sourceUrl} />
            </Head>
            <PostHeader title={post.title} excerpt={post.excerpt} featuredImage={post.featuredImage} />
            <Container maxWidth="xl" disableGutters>
              <PostBody content={post.content} />
              <AuthorInfo author={post.author.node} />
              <ContactForm />
            </Container>
          </article>
        </>
      )}
    </Layout>
  );
};

export default BlogPost;

export const getStaticProps: GetStaticProps<{}, { slug: string }> = async ({
  params,
  preview = false,
  previewData,
}) => {
  if (!params) {
    return {
      props: {
        preview,
        post: undefined,
        posts: undefined,
      },
    };
  }

  const data = await getPostAndMorePosts(params.slug, preview, previewData);

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`) || [],
    fallback: true,
  };
};
