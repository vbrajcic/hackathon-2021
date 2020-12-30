import Author from 'types/posts/author';
import { Categories as CategoriesProp } from 'types/common';
import FeaturedImage from 'types/posts/featuredImage';
import Avatar from './avatar';
import Date from './date';
import CoverImage from './coverImage';
import PostTitle from './postTitle';
import Categories from './categories';

type Props = {
  title: string;
  coverImage: FeaturedImage;
  date: string;
  author: Author;
  categories: CategoriesProp;
};

export default function PostHeader({ title, coverImage, date, author, categories }: Props) {
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
          Posted <Date dateString={date} />
          <Categories categories={categories} />
        </div>
      </div>
    </>
  );
}
