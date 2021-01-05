import React from 'react';
import { Edges } from 'types/common';
import Tag from 'types/posts/tag';
import styles from './Tags.module.scss';

interface TagsProps {
  tags: Edges<Tag>;
}

const Tags: React.FC<TagsProps> = ({ tags }) => (
  <div className={styles.container}>
    <p className={styles.label}>
      Tagged
      {tags.edges.map(tag => (
        <span key={tag.node.name} className={styles.tag}>
          {tag.node.name}
        </span>
      ))}
    </p>
  </div>
);

export default Tags;
