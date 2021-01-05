import React from 'react';
import Author from 'types/posts/author';
import FeaturedImage from 'types/posts/featuredImage';
import Avatar from 'components/Avatar';
import Date from 'components/Date';
import CoverImage from 'components/CoverImage';
import Hyperlink from 'components/Hyperlink';
import styles from './Teaser.module.scss';

interface TeaserProps {
  title: string;
  coverImage: FeaturedImage;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
}

const Teaser: React.FC<TeaserProps> = ({ title, coverImage, date, excerpt, author, slug }) => (
  <div>
    <div className={styles.marginBottom}>
      <CoverImage title={title} coverImage={coverImage} slug={slug} />
    </div>
    <h3 className={styles.title}>
      <Hyperlink
        as={slug}
        href={slug}
        AnchorProps={{
          className: styles.link,
          dangerouslySetInnerHTML: { __html: title },
        }}
      />
    </h3>
    <div className={styles.date}>
      <Date dateString={date} />
    </div>
    <div className={styles.author} dangerouslySetInnerHTML={{ __html: excerpt }} />
    <Avatar author={author} />
  </div>
);

export default Teaser;
