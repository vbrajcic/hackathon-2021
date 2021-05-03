import React from 'react';
import Post from 'types/posts/post';

import { Edges } from 'types/common';

interface BlogPostsContextValues {
  posts: Edges<Post>;
}

const BlogPostsContext = React.createContext<BlogPostsContextValues>({
  posts: { edges: [] },
});

export const useBlogPosts = () => React.useContext(BlogPostsContext);
export const BlogPostsContextProvider = BlogPostsContext.Provider;
export const BlogPostsContextConsumer = BlogPostsContext.Consumer;
