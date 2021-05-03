import React from 'react';
import cn from 'classnames';

import styles from './PostBody.module.scss';

interface PostBodyProps {
  content: string | undefined;
  className?: string;
}

const PostBody: React.FC<PostBodyProps> = ({ content, className }) => {
  if (!content) {
    return null;
  }

  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PostBody;
