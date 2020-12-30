import Post from './post';

type Draft = {
  id: number;
  slug: string;
  status: string;
  post: Post;
};

export default Draft;
