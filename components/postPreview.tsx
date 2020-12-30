import Author from 'types/posts/author';
import FeaturedImage from 'types/posts/featuredImage';
import Link from 'next/link';
import Avatar from './avatar';
import Date from './date';
import CoverImage from './coverImage';

type Props = {
  title: string;
  coverImage: FeaturedImage;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export default function PostPreview({ title, coverImage, date, excerpt, author, slug }: Props) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage title={title} coverImage={coverImage} slug={slug} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a className="hover:underline" dangerouslySetInnerHTML={{ __html: title }} />
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <div className="text-lg leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: excerpt }} />
      <Avatar author={author} />
    </div>
  );
}
