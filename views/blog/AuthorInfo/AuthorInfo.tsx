import React from 'react';
import Author from 'types/posts/author';
import useBreakpoint from 'utils/hooks/useBreakpoint';

import { Avatar, Grid, Paper, Typography } from '@material-ui/core';
import { getAuthorImage, getAuthorInitials, getAuthorName } from 'utils/static/postHelpers';

import styles from './AuthorInfo.module.scss';

interface AuthorInfoProps {
  author: Author;
}

const AuthorInfo: React.FC<AuthorInfoProps> = ({ author }) => {
  const Breakpoint = useBreakpoint();

  const renderJobTitle = () =>
    author.jobTitle && (
      <Typography variant="subtitle1" component="h4" color="textSecondary">
        <div dangerouslySetInnerHTML={{ __html: author.jobTitle }} />
      </Typography>
    );

  const renderName = () => (
    <Typography variant="subtitle1" component="h3" className={styles.name}>
      {getAuthorName(author)}
    </Typography>
  );

  const renderAvatar = () => (
    <Avatar src={getAuthorImage(author)} className={styles.avatar} alt={getAuthorName(author)}>
      {getAuthorInitials(author)}
    </Avatar>
  );

  const renderDescription = () =>
    author.description && (
      <Typography className={styles.description} variant="subtitle1" component="h5">
        <div dangerouslySetInnerHTML={{ __html: author.description }} />
      </Typography>
    );

  return (
    <Paper elevation={0} className={styles.container} classes={{ root: styles.root }}>
      {Breakpoint.isMobile ? (
        <Grid>
          <Grid className={styles.avatarAndNameWrapper}>
            {renderAvatar()}
            <Grid>
              {renderName()}
              {renderJobTitle()}
            </Grid>
          </Grid>
          {renderDescription()}
        </Grid>
      ) : (
        <>
          {renderAvatar()}
          <Grid>
            {renderName()}
            {renderJobTitle()}
            {renderDescription()}
          </Grid>
        </>
      )}
    </Paper>
  );
};

export default AuthorInfo;
