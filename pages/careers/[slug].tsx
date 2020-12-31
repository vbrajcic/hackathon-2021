import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Container from 'components/Container';
import PostBody from 'components/PostBody';
import RelatedPosts from 'components/RelatedPosts';
import PostHeader from 'components/PostHeader';
import SectionSeparator from 'components/SectionSeparator';
import Layout from 'components/Layout';
import { getAllPostsWithSlug, getPostAndMorePosts } from 'lib/api';
import PostTitle from 'components/PostTitle';
import Tags from 'components/Tags';
import { GetPostAndMorePostsResult } from 'lib/queries';

type CareerPostProps = GetPostAndMorePostsResult & {
  preview: boolean;
};

export default function CareerPost({ post, posts, preview }: CareerPostProps) {
  const router = useRouter();
  const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{`${post.title} | Profico`}</title>
                <meta property="og:image" content={post.featuredImage?.node?.sourceUrl} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage?.node}
                date={post.date}
                author={post.author?.node}
                categories={post.categories}
              />
              {post.content && <PostBody content={post.content} />}
              {post.tags && <footer>{post.tags.edges.length > 0 && <Tags tags={post.tags} />}</footer>}
            </article>

            <SectionSeparator />
            <RelatedPosts posts={morePosts} page="careers" />
          </>
        )}
      </Container>
    </Layout>
  );
}

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
    paths: allPosts.edges.map(({ node }) => `/careers/${node.slug}`) || [],
    fallback: true,
  };
};
