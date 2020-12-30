import Author from 'types/author';
import FeaturedImage from 'types/featuredImage';
import Link from 'next/link';
import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';

type Props = { 
  title: string, 
  coverImage: FeaturedImage, 
  date: string, 
  excerpt: string, 
  author: Author, 
  slug : string
}

export default function PostPreview({ title, coverImage, date, excerpt, author, slug }: Props) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage title={title} coverImage={coverImage} slug={slug} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
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
