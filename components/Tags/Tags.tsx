import { Edges } from 'types/common';
import Tag from 'types/posts/tag';

type TagsProps = {
  tags: Edges<Tag>;
};

export default function Tags({ tags }: TagsProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <p className="mt-8 text-lg font-bold">
        Tagged
        {tags.edges.map(tag => (
          <span key={tag.node.name} className="ml-4 font-normal">
            {tag.node.name}
          </span>
        ))}
      </p>
    </div>
  );
}
