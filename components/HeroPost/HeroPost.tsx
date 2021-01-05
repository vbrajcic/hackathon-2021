import React from 'react';
import Author from 'types/posts/author';
import FeaturedImage from 'types/posts/featuredImage';
import Avatar from 'components/Avatar';
import Date from 'components/Date';
import CoverImage from 'components/CoverImage';
import Hyperlink from 'components/Hyperlink';
import styles from './HeroPost.module.scss';

interface HeroPostProps {
  title: string;
  coverImage: FeaturedImage;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
}

const HeroPost: React.FC<HeroPostProps> = ({ title, coverImage, date, excerpt, author, slug }) => (
  <section>
    <div className={styles.cover}>{coverImage && <CoverImage title={title} coverImage={coverImage} slug={slug} />}</div>
    <div className={styles.container}>
      <div>
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
      </div>
      <div>
        <div className={styles.text} dangerouslySetInnerHTML={{ __html: excerpt }} />
        <Avatar author={author} />
      </div>
    </div>
  </section>
);

export default HeroPost;
