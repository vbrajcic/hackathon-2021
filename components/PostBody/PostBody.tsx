import React from 'react';
import styles from './PostBody.module.scss';

interface PostBodyProps {
  content: string;
}

const PostBody: React.FC<PostBodyProps> = ({ content }) => (
  <div className="max-w-2xl mx-auto">
    <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
  </div>
);

export default PostBody;
