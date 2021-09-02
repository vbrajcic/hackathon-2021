import React from 'react';
import ErrorPage from 'next/error';
import Container from '@material-ui/core/Container';
import PostBody from 'components/PostBody';
import PostHeader from 'components/PostHeader';
import Layout from 'components/Layout';
import PostTitle from 'components/PostTitle';
import ApplyForm from 'views/careers/ApplyForm';
import EasterEggPostButton from 'views/careers/EasterEggPostButton';
import useFactory from 'utils/hooks/useFactory';

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

  const metaImage = useFactory(() => {
    if (post.featuredImage) {
      return post.featuredImage.node.sourceUrl;
    }
    return undefined;
  });

  const metaDescription = useFactory(() => {
    if (post.excerpt) {
      return post.excerpt.replace('<p>', '').replace('</p>', '').trim();
    }
    return undefined;
  });

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview} title={post?.title} image={metaImage} description={metaDescription}>
      {router.isFallback ? (
        <Container maxWidth="xl" disableGutters>
          <PostTitle title="Loading…" />
        </Container>
      ) : (
        <>
          <article>
            <PostHeader intro="We are hiring" title={post.title} excerpt={post.excerpt} />
            <Container className={styles.container} maxWidth="xl" disableGutters>
              <EasterEggPostButton slug={post.slug} tags={post.tags} />
              <PostBody content={post.content} className={styles.body} />
              <ApplyForm title={post.title} jobTags={post.tags} />
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
