import React from 'react';
import Author from 'types/posts/author';

import { getAuthorImage, getAuthorName } from 'utils/static/postHelpers';

import styles from './Avatar.module.scss';

interface AvatarProps {
  author?: Author;
}

const Avatar: React.FC<AvatarProps> = ({ author }) => {
  const name = getAuthorName(author);

  return (
    <>
      {author && name && (
        <div className={styles.container}>
          <img src={getAuthorImage(author)} className={styles.image} alt={name} />
          <div className={styles.name}>{name}</div>
        </div>
      )}
    </>
  );
};

export default Avatar;
