export const AUTHOR_FIELDS_FRAGMENT = `
  fragment AuthorFields on User {
    name
    firstName
    lastName
    avatar {
      url
    }
  }`;

export const REGULAR_POST_FIELDS_FRAGMENT = `
  ${AUTHOR_FIELDS_FRAGMENT}
  
  fragment RegularPostFields on Post {
    title
    excerpt
    slug
    date
    featuredImage {
      node {
        sourceUrl
      }
    }
    author {
      node {
        ...AuthorFields
      }
    }
    categories {
      edges {
        node {
          name
        }
      }
    }
    tags {
      edges {
        node {
          name
        }
      }
    }
  }`;

export const REVISION_POST_FIELDS_FRAGMENT = `
  fragment RevisionPostFields on Post {
    title
    excerpt
    content
    author {
      node {
        ...AuthorFields
      }
    }
  }`;
