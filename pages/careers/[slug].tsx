import React from 'react';
import Head from 'next/head';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';

import Container from '@material-ui/core/Container';

import PostBody from 'components/PostBody';
import PostHeader from 'components/PostHeader';
import Layout from 'components/Layout';
import PostTitle from 'components/PostTitle';

import ApplyForm from 'pages/careers/ApplyForm';

import { getAllPostsWithSlug, getPostAndMorePosts } from 'lib/api';
import { GetPostAndMorePostsResult } from 'lib/queries';

import styles from './Careers.module.scss';

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
      {router.isFallback ? (
        <Container maxWidth="xl" disableGutters>
          <PostTitle>Loading…</PostTitle>
        </Container>
      ) : (
        <>
          <article>
            <Head>
              <title>{`${post.title} | Profico`}</title>
              <meta property="og:image" content={post.featuredImage?.node?.sourceUrl} />
            </Head>
            <Container className={styles.container} maxWidth="xl" disableGutters>
              <PostHeader title={post.title} excerpt={post.excerpt} slug={post.slug} />
              <PostBody content={post.content} className={styles.body} />
              <ApplyForm />
            </Container>
          </article>
        </>
      )}
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
