import Draft from 'types/posts/draft';
import Post from 'types/posts/post';
import { GET_PREVIEW_POST, GET_ALL_POSTS_WITH_SLUG, GET_ALL_POSTS_FOR_HOME, GET_POST_AND_MORE_POSTS } from './queries';

const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query: string, { variables = {} } = {}) {
  type Headers = {
    'Content-Type': string;
    Authorization?: string;
  };

  const headers: Headers = { 'Content-Type': 'application/json' };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers.Authorization = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    // console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getPreviewPost(id: string | string[], idType = 'DATABASE_ID') {
  const data = await fetchAPI(GET_PREVIEW_POST, {
    variables: { id, idType },
  });
  return data.post;
}

export async function getAllPostsWithSlug() {
  type Data = {
    posts: {
      edges: {
        node: Post;
      }[];
    };
  };

  const data: Data = await fetchAPI(GET_ALL_POSTS_WITH_SLUG);

  return data?.posts;
}

export async function getAllPostsForHome(preview: boolean) {
  type Data = {
    posts: {
      edges: {
        node: Post;
      }[];
    };
  };

  const data: Data = await fetchAPI(GET_ALL_POSTS_FOR_HOME, {
    variables: {
      onlyEnabled: !preview,
      preview,
    },
  });

  return data?.posts;
}

export async function getPostAndMorePosts(slug: string, preview: boolean, previewData) {
  const postPreview: boolean | Draft = preview && previewData?.post;
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug));
  const isSamePost = isId ? Number(slug) === postPreview.id : slug === postPreview.slug;
  const isDraft = isSamePost && postPreview?.status === 'draft';
  const isRevision = isSamePost && postPreview?.status === 'publish';

  type Data = {
    post: Post;
    posts: {
      edges: {
        node: Post;
      }[];
    };
  };

  const data: Data = await fetchAPI(GET_POST_AND_MORE_POSTS(isRevision), {
    variables: {
      id: isDraft ? postPreview.id : slug,
      idType: isDraft ? 'DATABASE_ID' : 'SLUG',
    },
  });

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id;
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node;

    if (revision) Object.assign(data.post, revision);
    delete data.post.revisions;
  }

  // Filter out the main post
  data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug);
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 2) data.posts.edges.pop();

  return data;
}
