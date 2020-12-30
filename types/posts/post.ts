import Author from './author';
import Category from './category';
import FeaturedImage from './featuredImage';
import Tag from './tag';

type Post = {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  featuredImage: {
    node: FeaturedImage;
  };
  author: {
    node: Author;
  };
  categories?: {
    edges: {
      node: Category;
    }[];
  };
  tags?: {
    edges: {
      node: Tag;
    }[];
  };
  content?: string;
};

export default Post;
