import { Edges } from 'types/common';
import Category from 'types/posts/category';

type Props = {
  categories: Edges<Category>;
};

export default function Categories({ categories }: Props) {
  return (
    <span className="ml-1">
      under
      {categories.edges.length > 0 ? (
        categories.edges.map(category => (
          <span key={category.node.name} className="ml-1">
            {category.node.name}
          </span>
        ))
      ) : (
        <span className="ml-1">{categories.edges[0].node.name}</span>
      )}
    </span>
  );
}
