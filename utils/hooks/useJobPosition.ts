import jobPositions, { JobPosition } from 'config/jobPositions';
import { Edges } from 'types/common';
import Tag from 'types/posts/tag';

type UseJobPositionPayload = JobPosition | undefined;

const useJobPosition = (tags?: Edges<Tag>): UseJobPositionPayload => {
  // populate tags into single array
  const jobTags: string[] = [];
  tags?.edges.forEach(edge => jobTags.push(edge.node.name));

  const jobType = jobPositions.find(jobPosition => {
    if (jobTags.includes('Full-Stack')) {
      return jobPosition;
    }
    return jobTags.includes(jobPosition.tag);
  });

  return jobType;
};

export default useJobPosition;
