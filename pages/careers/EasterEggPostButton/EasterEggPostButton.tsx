import React from 'react';
import Fab from '@material-ui/core/Fab/Fab';
import Coding from 'components/SvgIcons/Coding';
import useToggleState from 'utils/hooks/useToggleState';

import { Button, Snackbar } from '@material-ui/core';
import { useCopyToClipboard } from 'react-use';

import styles from './EasterEggPostButton.module.scss';

interface EasterEggPostButtonProps {
  slug: string;
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

// @TODO: Render a different button depending on the job position
const EasterEggPostButton: React.FC<EasterEggPostButtonProps> = ({ slug }) => {
  const [snackbarOpen, toggleSnackbar] = useToggleState();
  const [{ error }, copyToClipboard] = useCopyToClipboard();

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
        ClickAwayListenerProps={{ onClickAway: noop }}
        action={
          <Button onClick={toggleSnackbar} size="small" startIcon={null} variant="text">
            CLOSE
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
        <Coding />
      </Fab>
    </>
  );
};

export default EasterEggPostButton;
