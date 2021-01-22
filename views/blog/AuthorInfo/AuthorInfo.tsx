import React from 'react';
import Author from 'types/posts/author';
import useBreakpoint from 'utils/hooks/useBreakpoint';

import { Avatar, Grid, Paper, Typography } from '@material-ui/core';

import styles from './AuthorInfo.module.scss';

interface AuthorInfoProps {
  author: Author;
}

const AuthorInfo: React.FC<AuthorInfoProps> = ({ author }) => {
  const Breakpoint = useBreakpoint();
  const initials = React.useMemo(() => {
    if (author.firstName && author.lastName) {
      return author.firstName.charAt(0).toUpperCase() + author.lastName.charAt(0).toUpperCase();
    }

    return author.name.charAt(0).toUpperCase();
  }, [author]);

  return (
    <Paper elevation={0} className={styles.container} classes={{ root: styles.root }}>
      {Breakpoint.isMobile ? (
        <Grid>
          <Grid className={styles.avatarAndNameWrapper}>
            <Avatar src={author.avatar.url} className={styles.avatar}>
              {initials}
            </Avatar>
            <Typography variant="subtitle1" className={styles.name}>
              {author.name}
            </Typography>
          </Grid>
          {author.description && (
            <Typography className={styles.description} variant="subtitle1">
              {author.description}
            </Typography>
          )}
        </Grid>
      ) : (
        <>
          <Avatar src={author.avatar.url} className={styles.avatar}>
            {initials}
          </Avatar>
          <Grid>
            <Typography variant="subtitle1" className={styles.name}>
              {author.name}
            </Typography>
            {author.description && (
              <Typography className={styles.description} variant="subtitle1">
                {author.description}
              </Typography>
            )}
          </Grid>
        </>
      )}
    </Paper>
  );
};

export default AuthorInfo;
