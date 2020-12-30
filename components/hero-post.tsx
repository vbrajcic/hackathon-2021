import Link from 'next/link';
import Author from 'types/author';
import FeaturedImage from 'types/featuredImage';
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

export default function HeroPost({ title, coverImage, date, excerpt, author, slug }: Props) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        {coverImage && <CoverImage title={title} coverImage={coverImage} slug={slug} />}
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline" dangerouslySetInnerHTML={{ __html: title }} />
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <div className="text-lg leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: excerpt }} />
          <Avatar author={author} />
        </div>
      </div>
    </section>
  );
}
