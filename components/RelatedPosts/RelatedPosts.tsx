import React from 'react';
import { Node } from 'types/common';
import Post from 'types/posts/post';
import Teaser from 'components/Teaser';

interface RelatedPostsProps {
  posts: Node<Post>[];
  page: string;
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts, page }) => {
  if (!posts.length) return null;
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">More posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {posts.map(({ node }) => (
          <Teaser
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage?.node}
            date={node.date}
            author={node.author?.node}
            slug={`/${page}/${node.slug}`}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
