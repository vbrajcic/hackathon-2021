import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';

import Container from '@material-ui/core/Container';

import PostBody from 'components/PostBody';
import PostHeader from 'components/PostHeader';
import Layout from 'components/Layout';
import { getAllPostsWithSlug, getPostAndMorePosts } from 'lib/api';
import PostTitle from 'components/PostTitle';
import { GetPostAndMorePostsResult } from 'lib/queries';
import ApplyForm from 'pages/careers/ApplyForm';

type CareerPostProps = GetPostAndMorePostsResult & {
  preview: boolean;
};

const CareerPost: React.FC<CareerPostProps> = ({ post, preview }) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container maxWidth="xl" disableGutters>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{`${post.title} | Profico`}</title>
                <meta property="og:image" content={post.featuredImage?.node?.sourceUrl} />
              </Head>
              <PostHeader title={post.title} excerpt={post.excerpt} />
              <PostBody content={post.content} />
              <ApplyForm />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default CareerPost;

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
      },
    };
  }

  const data = await getPostAndMorePosts(params.slug, preview, previewData);

  return {
    props: {
      preview,
      post: data.post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/careers/${node.slug}`) || [],
    fallback: true,
  };
};
