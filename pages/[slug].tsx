import React from 'react';

import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { GetPostAndMorePostsResult } from 'lib/queries';
import { getAllBlogPostsSlugs, getAllCareersPostsSlugs } from 'lib/api';

import Error404Page from './404';

type PostFallbackProps = GetPostAndMorePostsResult & {
  preview: boolean;
};

const PostFallback: React.FC<PostFallbackProps> = ({ post }) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <Error404Page />;
  }

  return null;
};

export default PostFallback;

export const getServerSideProps: GetServerSideProps<{}, { slug: string }> = async ({
  params,
}) => {
  if (!params) {
    return {
      props: {
        post: null,
      },
    };
  }

  const [allBlogPostsSlugs, allCareersPostsSlugs] = await Promise.all([
    getAllBlogPostsSlugs(),
    getAllCareersPostsSlugs(),
  ]);

  const isBlogPost = allBlogPostsSlugs.edges.some(({ node }) => node.slug === params.slug);
  const isCareerPost = allCareersPostsSlugs.edges.some(({ node }) => node.slug === params.slug);

  if (isBlogPost) {
    return {
      redirect: {
        destination: `/blog/${params.slug}`,
        permanent: false,
      },
    };
  }

  if (isCareerPost) {
    return {
      redirect: {
        destination: `/careers/${params.slug}`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      post: null,
    }
  }
};
