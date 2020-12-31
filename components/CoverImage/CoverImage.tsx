import React from 'react';
import cn from 'classnames';
import FeaturedImage from 'types/posts/featuredImage';
import Hyperlink from 'components/Hyperlink';

interface CoverImageProps {
  title: string;
  coverImage?: FeaturedImage;
  slug?: string;
}

const CoverImage: React.FC<CoverImageProps> = ({ title, coverImage, slug }) => {
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
};

export default CoverImage;
