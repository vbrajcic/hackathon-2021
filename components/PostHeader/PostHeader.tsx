import Author from 'types/posts/author';
import FeaturedImage from 'types/posts/featuredImage';
import { Edges } from 'types/common';
import Category from 'types/posts/category';
import Avatar from 'components/Avatar';
import Date from 'components/Date';
import CoverImage from 'components/CoverImage';
import PostTitle from 'components/PostTitle';
import Categories from 'components/Categories';

type PostHeaderProps = {
  title: string;
  coverImage: FeaturedImage;
  date: string;
  author: Author;
  categories?: Edges<Category>;
};

export default function PostHeader({ title, coverImage, date, author, categories }: PostHeaderProps) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar author={author} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar author={author} />
        </div>
        <div className="mb-6 text-lg">
          Posted&nbsp;
          <Date dateString={date} />
          {categories && <Categories categories={categories} />}
        </div>
      </div>
    </>
  );
}
