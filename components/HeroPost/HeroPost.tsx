import Author from 'types/posts/author';
import FeaturedImage from 'types/posts/featuredImage';
import Avatar from 'components/Avatar';
import Date from 'components/Date';
import CoverImage from 'components/CoverImage';
import Hyperlink from 'components/Hyperlink';

type HeroPostProps = {
  title: string;
  coverImage: FeaturedImage;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export default function HeroPost({ title, coverImage, date, excerpt, author, slug }: HeroPostProps) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        {coverImage && <CoverImage title={title} coverImage={coverImage} slug={slug} />}
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Hyperlink
              as={slug}
              href={slug}
              AnchorProps={{
                className: 'hover:underline',
                dangerouslySetInnerHTML: { __html: title },
              }}
            />
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
