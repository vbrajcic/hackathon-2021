import React from 'react';
import ErrorPage from 'next/error';
import Container from '@material-ui/core/Container';
import PostBody from 'components/PostBody';
import BlogHeader from 'components/BlogHeader';
import Layout from 'components/Layout';
import PostTitle from 'components/PostTitle';
import AuthorInfo from 'views/blog/AuthorInfo';
import ExploreMoreArticles from 'views/blog/ExploreMoreArticles';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import useFactory from 'utils/hooks/useFactory';

import { getPostAndMorePosts } from 'lib/api';
import { GetPostAndMorePostsResult } from 'lib/queries';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

type BlogPostProps = GetPostAndMorePostsResult & {
  preview: boolean;
};

const BlogPost: React.FC<BlogPostProps> = ({ post, posts, preview }) => {
  const router = useRouter();

  const { isMobile } = useBreakpoint();

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

  const mobileImage = post.image?.thumbnailImage || post.featuredImage?.node;

  return (
    <Layout
      preview={preview}
      theme="light"
      title={post?.title}
      image={metaImage}
      description={metaDescription}
      FooterProps={{ bgColor: !isMobile ? 'grey' : undefined }}
    >
      {router.isFallback ? (
        <Container maxWidth="xl" disableGutters>
          <PostTitle title="Loading…" />
        </Container>
      ) : (
        <>
          <article>
            <BlogHeader
              title={post.title}
              author={post.author.node}
              content={post.content}
              featuredImage={isMobile ? mobileImage : post.featuredImage?.node}
            />
            <Container maxWidth="xl" disableGutters>
              <PostBody content={post.content} />
              <AuthorInfo author={post.author.node} />
            </Container>
            <ExploreMoreArticles posts={posts} />
          </article>
        </>
      )}
    </Layout>
  );
};

export default BlogPost;

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
        posts: undefined,
      },
    };
  }

  const data = await getPostAndMorePosts(params.slug, preview, previewData, true);

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  };
};
