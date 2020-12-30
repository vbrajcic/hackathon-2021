import Category from './posts/category';
import Post from './posts/post';

export type Posts = {
  edges: {
    node: Post;
  }[];
};

export type Categories = {
  edges: {
    node: Category;
  }[];
};
