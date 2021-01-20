import React from 'react';

import Typography from '@material-ui/core/Typography';

interface PostTitleProps {
  intro?: string;
  title: string;
}

const PostTitle: React.FC<PostTitleProps> = ({ intro, title }) => (
  <Typography variant="h1">
    {intro && (
      <Typography color="secondary" variant="h1" component="span">
        {intro}
      </Typography>
    )}
    <br />
    {title}
  </Typography>
);

export default PostTitle;
