import React from 'react';

import styles from './PostBody.module.scss';

interface PostBodyProps {
  content: string | undefined;
}

const PostBody: React.FC<PostBodyProps> = ({ content }) => {
  if (!content) return null;
  return (
    <div className={styles.article}>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PostBody;
