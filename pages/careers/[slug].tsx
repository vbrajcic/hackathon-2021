import React from 'react';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Container from '@material-ui/core/Container';
import PostBody from 'components/PostBody';
import PostHeader from 'components/PostHeader';
import Layout from 'components/Layout';
import PostTitle from 'components/PostTitle';
import ApplyForm from 'views/careers/ApplyForm';
import EasterEggPostButton from 'views/careers/EasterEggPostButton';

import { getPostAndMorePosts } from 'lib/api';
import { GetServerSideProps } from 'next';
import { GetPostAndMorePostsResult } from 'lib/queries';
import { useRouter } from 'next/router';

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
    <Layout preview={preview} title={post?.title}>
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
            <PostHeader intro="We are hiring" title={post.title} excerpt={post.excerpt} />
            <Container className={styles.container} maxWidth="xl" disableGutters>
              <EasterEggPostButton slug={post.slug} tags={post.tags} />
              <PostBody content={post.content} className={styles.body} />
              <ApplyForm jobTags={post.tags} />
            </Container>
          </article>
        </>
      )}
    </Layout>
  );
};

export default CareerPost;

export const getServerSideProps: GetServerSideProps<{}, { slug: string }> = async ({
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