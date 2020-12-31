import cn from 'classnames';
import FeaturedImage from 'types/posts/featuredImage';
import Hyperlink from 'components/Hyperlink';

type CoverImageProps = {
  title: string;
  coverImage?: FeaturedImage;
  slug?: string;
};

export default function CoverImage({ title, coverImage, slug }: CoverImageProps) {
  if (!coverImage) {
    return null;
  }

  const image = (
    <img
      src={coverImage.sourceUrl}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      alt="Cover"
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Hyperlink as={slug} href={slug} AnchorProps={{ 'aria-label': title }}>
          {image}
        </Hyperlink>
      ) : (
        image
      )}
    </div>
  );
}
