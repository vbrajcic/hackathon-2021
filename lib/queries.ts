import Post from 'types/posts/post';

import { Edges, QueryEdgesResult } from 'types/common';
import { Preview } from 'types/posts/preview';
import { CAREERS_CATEGORY_ID } from './constants';
import { REGULAR_POST_FIELDS_FRAGMENT, REVISION_POST_FIELDS_FRAGMENT } from './fragments';

export type GetPreviewPostResult = Preview;

export const GET_PREVIEW_POST = `
  query PreviewPost($id: ID!, $idType: PostIdType!) {
    post(id: $id, idType: $idType) {
      databaseId
      slug
      status
    }
  }`;

export type GetAllPostsSlugsResult = QueryEdgesResult<'posts', Post>;

export const GET_ALL_BLOG_POSTS_SLUGS = `
  {
    posts(first: 100, where: { categoryNotIn: "${CAREERS_CATEGORY_ID}" }) {
      edges {
        node {
          slug
        }
      }
    }
  }`;

export const GET_ALL_CAREERS_POSTS_SLUGS = `
  {
    posts(first: 100, where: { categoryIn: "${CAREERS_CATEGORY_ID}" }) {
      edges {
        node {
          slug
        }
      }
    }
  }`;

export type GetAllCategoryPostsResult = QueryEdgesResult<'posts', Post>;

export const GET_ALL_CAREER_POSTS = `
  ${REGULAR_POST_FIELDS_FRAGMENT}

  query AllPosts {
    posts(first: 20, where: { orderby: { field: DATE, order: DESC }, categoryIn: "${CAREERS_CATEGORY_ID}" }) {
      edges {
        node {
          ...RegularPostFields
        }
      }
    }
  }`;

export const GET_ALL_BLOG_POSTS = `
  ${REGULAR_POST_FIELDS_FRAGMENT}

  query AllPosts {
    posts(first: 100, where: { orderby: { field: DATE, order: DESC }, categoryNotIn: [${CAREERS_CATEGORY_ID}] }) {
      edges {
        node {
          ...RegularPostFields
        }
      }
    }
  }`;

export type GetPostAndMorePostsResult = {
  post: Post;
  posts: Edges<Post>;
};

const getRevisionsQuery = (isRevision: boolean) => {
  // Only some of the fields of a revision are considered as there are some inconsistencies
  if (isRevision) {
    return `
      ${REVISION_POST_FIELDS_FRAGMENT}

      revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
        edges {
          node {
            ...RevisionPostFields
          }
        }
      }
    `;
  }

  return '';
};

export const GET_CAREER_POST_AND_MORE_POSTS = (isRevision: boolean) => `
    ${REGULAR_POST_FIELDS_FRAGMENT}
  
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...RegularPostFields
        content
        ${getRevisionsQuery(isRevision)}
      }
  
      posts(first: 3, where: { orderby: { field: DATE, order: DESC }, categoryIn: "${CAREERS_CATEGORY_ID}" }) {
        edges {
          node {
            ...RegularPostFields
          }
        }
      }
    }`;

export const GET_BLOG_POST_AND_MORE_POSTS = (isRevision: boolean) => `
    ${REGULAR_POST_FIELDS_FRAGMENT}
  
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...RegularPostFields
        content
        ${getRevisionsQuery(isRevision)}
      }
  
      posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...RegularPostFields
          }
        }
      }
    }`;
