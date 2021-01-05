import React from 'react';
import Author from 'types/posts/author';
import FeaturedImage from 'types/posts/featuredImage';
import { Edges } from 'types/common';
import Category from 'types/posts/category';
import Avatar from 'components/Avatar';
import Date from 'components/Date';
import CoverImage from 'components/CoverImage';
import PostTitle from 'components/PostTitle';
import Categories from 'components/Categories';
import styles from './PostHeader.module.scss';

interface PostHeaderProps {
  title: string;
  coverImage: FeaturedImage;
  date: string;
  author: Author;
  categories?: Edges<Category>;
}

const PostHeader: React.FC<PostHeaderProps> = ({ title, coverImage, date, author, categories }) => (
  <>
    <PostTitle>{title}</PostTitle>
    <div className={styles.author}>
      <Avatar author={author} />
    </div>
    <div className={styles.coverImage}>
      <CoverImage title={title} coverImage={coverImage} />
    </div>
    <div className={styles.container}>
      <div className={styles.author}>
        <Avatar author={author} />
      </div>
      <div className={styles.byline}>
        Posted&nbsp;
        <Date dateString={date} />
        {categories && <Categories categories={categories} />}
      </div>
    </div>
  </>
);

export default PostHeader;
