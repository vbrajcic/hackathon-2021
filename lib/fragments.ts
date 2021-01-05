const AUTHOR = `
  author {
    node {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
  }`;

const FEATURED_IMAGE = `
  featuredImage {
    node {
      sourceUrl
    }
  }`;

const CATEGORIES = `
  categories {
    edges {
      node {
        name
      }
    }
  }`;

const TAGS = `
  tags {
    edges {
      node {
        name
      }
    }
  }`;

export const POST = `
  node {
    title
    excerpt
    slug
    date
    ${FEATURED_IMAGE}
    ${AUTHOR}
  }`;

export const AUTHOR_FIELDS_ON_USER = `
  fragment AuthorFields on User {
    name
    firstName
    lastName
    avatar {
      url
    }
  }`;

export const POST_FIELDS_ON_POST = `
  fragment PostFields on Post {
    title
    excerpt
    slug
    date
    ${FEATURED_IMAGE}
    author {
      node {
        ...AuthorFields
      }
    }
    ${CATEGORIES}
    ${TAGS}
  }`;

export const REVISION_POST = `
  node {
    title
    excerpt
    content
    author {
      node {
        ...AuthorFields
      }
    }
  }`;
