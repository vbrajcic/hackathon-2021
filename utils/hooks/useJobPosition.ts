import jobPositions, { JobPosition } from 'config/jobPositions';
import Tag from 'types/posts/tag';

import { Edges } from 'types/common';

import useFactory from './useFactory';

type UseJobPositionPayload = JobPosition | undefined;

const useJobPosition = (tags?: Edges<Tag>): UseJobPositionPayload => {
  const jobType = useFactory(() => {
    const jobTags = tags ? tags.edges.map(({ node }) => node.name) : [];

    return jobPositions.find(jobPosition => {
      if (jobTags.includes('Full-Stack')) {
        return jobPosition;
      }

      return jobTags.includes(jobPosition.tag);
    });
  });

  return jobType;
};

export default useJobPosition;
