import React from 'react';
import Fab from '@material-ui/core/Fab/Fab';
import useToggleState from 'utils/hooks/useToggleState';
import useJobPosition from 'utils/hooks/useJobPosition';
import Tag from 'types/posts/tag';

import { Button, Snackbar } from '@material-ui/core';
import { useCopyToClipboard } from 'react-use';
import { Edges } from 'types/common';

import styles from './EasterEggPostButton.module.scss';

interface EasterEggPostButtonProps {
  slug: string;
  tags?: Edges<Tag>;
}

const getUrl = (slug: string) => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return `http://localhost:3000/careers/${slug}`;
    case 'test':
      return `https://web.proficodev.com/${slug}`;
    case 'production':
    default:
      return `https://profi.co/${slug}`;
  }
};

const noop = () => {};

const EasterEggPostButton: React.FC<EasterEggPostButtonProps> = ({ slug, tags }) => {
  const [snackbarOpen, toggleSnackbar] = useToggleState();
  const [{ error }, copyToClipboard] = useCopyToClipboard();

  const jobPosition = useJobPosition(tags);

  if (!jobPosition) {
    return null;
  }

  const JobIcon = jobPosition.icon;

  const handleCopyToClipboard = () => {
    if (!snackbarOpen) {
      copyToClipboard(getUrl(slug));
      toggleSnackbar();
    }
  };

  return (
    <>
      <Snackbar
        open={snackbarOpen && !error}
        autoHideDuration={3000}
        resumeHideDuration={3000}
        ClickAwayListenerProps={{ onClickAway: noop }}
        classes={{ root: styles.snackbarRoot }}
        ContentProps={{ className: styles.snackbarContent }}
        action={
          <Button onClick={toggleSnackbar} size="small" className={styles.closeBtn} startIcon={null} variant="text">
            Close
          </Button>
        }
        onClose={toggleSnackbar}
        message="Link copied! 🎉"
      />
      <Fab
        color="secondary"
        size="large"
        onClick={handleCopyToClipboard}
        classes={{ root: styles.root }}
        className={styles.container}
      >
        <JobIcon />
      </Fab>
    </>
  );
};

export default EasterEggPostButton;
