import React from 'react';

import Typography from '@material-ui/core/Typography';

const PostTitle: React.FC = ({ children }) => (
  <Typography variant="h1">
    <Typography color="secondary" variant="h1" component="span">
      We are hiring
    </Typography>
    <br />
    {children}
  </Typography>
);

export default PostTitle;
