import { useState } from 'react';
import { useMount } from 'react-use';
import { decodeString, encodeString, NumberParam, useQueryParams, withDefault } from 'use-query-params';

import Post from 'types/posts/post';
import StringUtils from 'utils/static/StringUtils';

import { Edges, Node } from 'types/common';

export interface FilteredPosts {
  allPosts: Post[];
  company: Post[];
  design: Post[];
  development: Post[];
  technology: Post[];
}

export type PostCategory = keyof FilteredPosts;

const filterPostsByCategory = (category: PostCategory, posts: Node<Post>[]): Post[] => {
  if (category === 'allPosts') {
    return posts.map(({ node }) => node);
  }

  const name = StringUtils.capitalise(StringUtils.snakeCaseToSentenceCase(category).toLowerCase());

  return posts
    .filter(({ node: { tags } }) => {
      const tagNames = tags ? tags.edges.map(({ node }) => node.name) : [];

      return tagNames.includes(name);
    })
    .map(({ node }) => node);
};

const useBlogParams = (allPosts: Edges<Post>) => {
  const [params, setParams] = useQueryParams({
    category: withDefault(
      {
        encode: encodeString,
        decode: v => decodeString(v) as PostCategory,
      },
      'allPosts'
    ),
    page: NumberParam,
  });
  const [filteredPosts, setFilteredPosts] = useState<FilteredPosts>({
    allPosts: [],
    company: [],
    design: [],
    development: [],
    technology: [],
  });

  useMount(() => {
    const { edges } = allPosts;

    const posts: FilteredPosts = {
      allPosts: filterPostsByCategory('allPosts', edges),
      company: filterPostsByCategory('company', edges),
      design: filterPostsByCategory('design', edges),
      development: filterPostsByCategory('development', edges),
      technology: filterPostsByCategory('technology', edges),
    };

    setFilteredPosts(posts);
  });

  const handleCategoryChange = (category: PostCategory) => {
    setParams({ category, page: undefined });
  };

  const handlePageChange = (newPage: number) => setParams({ page: newPage === 1 ? undefined : newPage });

  return {
    filteredPosts,
    activeCategory: params.category,
    page: params.page,
    handleCategoryChange,
    handlePageChange,
  };
};

export default useBlogParams;
